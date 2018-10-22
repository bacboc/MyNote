import pymysql

########################### DB 연동하기 ##########################################
conn = pymysql.connect(host='127.0.0.1', user='root', passwd='153624', db='mysql', charset='utf8')
cur = conn.cursor()
cur.execute("USE tourmaker")
cur.execute("select * from tweeter;")
rows = cur.fetchall()


text_file_name = "out.txt"
open_text_file = open(text_file_name, 'w',-1,"utf-8")

for row in rows:
    open_text_file.write('{}\n'.format(row[1]))

    
open_text_file.close()   #파일 close