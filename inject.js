window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'NCNU_HACK_TRIGGER') {
        try {
            if (window.H5P && window.H5P.instances && window.H5P.instances.length > 0) {
                var instance = window.H5P.instances[0];
                var xAPIEvent = instance.createXAPIEventTemplate('completed');
                if (xAPIEvent && xAPIEvent.data && xAPIEvent.data.statement) {
                    xAPIEvent.data.statement.result = {
                        completion: true,
                        success: true,
                        score: { scaled: 1, raw: 1, min: 0, max: 1 }
                    };
                    instance.trigger(xAPIEvent);
                    window.top.postMessage({ type: 'NCNU_HACK_SUCCESS' }, '*');
                }
            } else {
                window.top.postMessage({ type: 'NCNU_HACK_FAIL' }, '*');
            }
        } catch(e) {
            window.top.postMessage({ type: 'NCNU_HACK_FAIL', error: e.toString() }, '*');
        }
    }
});
