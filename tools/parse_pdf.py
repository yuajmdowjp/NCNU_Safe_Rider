import re
import json

# 讀取原始題庫文字檔
with open('raw_questions.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# 使用正規表達式匹配「數字.題目文字」以及「答案:數字」
pattern = re.compile(r'\d+\.(.*?)(?=\(\d+\)).*?答案\s*:\s*(\d)', re.DOTALL)
matches = pattern.findall(text)

questions_db = []
for match in matches:
    question_text = match[0].strip().replace('\n', '')
    answer_val = match[1].strip()
    
    questions_db.append({
        "question": question_text,
        "answer": answer_val
    })

# 輸出成擴充功能需要的格式
with open('questions.js', 'w', encoding='utf-8') as f:
    f.write("const questionsDB = ")
    json.dump(questions_db, f, ensure_ascii=False, indent=2)
    f.write(";")

print(f"轉換完成！共提取了 {len(questions_db)} 題。")
