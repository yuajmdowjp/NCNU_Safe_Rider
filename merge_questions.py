import json
import re

def extract_json_array(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 找到第一個 '[' 和最後一個 ']'
    start_idx = content.find('[')
    end_idx = content.rfind(']')
    
    if start_idx != -1 and end_idx != -1:
        array_str = content[start_idx:end_idx+1]
        try:
            return json.loads(array_str)
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON from {filepath}: {e}")
            return []
    return []

q1 = extract_json_array('機車危險感知影片選擇題_126題.js')
q2 = extract_json_array('機車情境式題目_120題.js')

all_q = q1 + q2

with open('NCNU_Safe_Rider/questions.js', 'w', encoding='utf-8') as f:
    f.write('const questionsDB = ')
    json.dump(all_q, f, ensure_ascii=False, indent=2)
    f.write(';\n')

print(f"成功合併了 {len(q1)} + {len(q2)} = {len(all_q)} 題！")
