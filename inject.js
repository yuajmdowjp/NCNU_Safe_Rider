window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'NCNU_HACK_TRIGGER') {
        try {
            if (window.H5P && window.H5P.instances && window.H5P.instances.length > 0) {
                var instance = window.H5P.instances[0];
                
                var interactions = instance.interactions || (instance.video && instance.video.interactions) || [];
                if (interactions.length > 0) {
                    var currentTime = (instance.video && typeof instance.video.getCurrentTime === 'function') ? instance.video.getCurrentTime() : 0;
                    var nextTime = -1;
                    
                    for (var i = 0; i < interactions.length; i++) {
                        var inter = interactions[i];
                        if (inter.duration && inter.duration.from > currentTime + 1) {
                            if (nextTime === -1 || inter.duration.from < nextTime) {
                                nextTime = inter.duration.from;
                            }
                        }
                    }
                    
                    if (nextTime !== -1) {
                        if (typeof instance.seek === 'function') {
                            instance.seek(nextTime);
                        } else if (instance.video && typeof instance.video.seek === 'function') {
                            instance.video.seek(nextTime);
                        }
                        window.top.postMessage({ type: 'NCNU_JUMP_SUCCESS', time: nextTime }, '*');
                    } else {
                        window.top.postMessage({ type: 'NCNU_JUMP_DONE' }, '*');
                    }
                } else {
                    window.top.postMessage({ type: 'NCNU_HACK_FAIL', error: '找不到互動題目' }, '*');
                }
            } else {
                window.top.postMessage({ type: 'NCNU_HACK_FAIL', error: '找不到 H5P 實例' }, '*');
            }
        } catch(e) {
            window.top.postMessage({ type: 'NCNU_HACK_FAIL', error: e.toString() }, '*');
        }
    }
});
