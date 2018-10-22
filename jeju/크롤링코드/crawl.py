import tweepy
import pymysql

########################### DB 연동하기 ##########################################
conn = pymysql.connect(host='127.0.0.1', user='root', passwd='153624', db='mysql', charset='utf8')
cur = conn.cursor()
cur.execute("USE tourmaker")

consumer_key='Ed04jQhvKpWJoufL7H1xUn4cS'
consumer_secret='K1Iv1Q8kHuSvkP4dnMJOl79dOKKSAkGhgnp0rP0d1karmyTI00'
access_token='949874709310595073-RhzKylfAt6r5TVWz1VJYSD23BobUv89'
access_token_secret='VO0CBVLpQLUMfzbDkW6zQtsuSQEsFYbY6quCQmPjBUlKs'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)

api = tweepy.API(auth)

keywords=['제주','섭지코지','함덕해수욕장','#함덕해수욕장','#섭지코지','제주도','제주동부','베니스랜드','#제주','#제주도','#베니스랜드','#제주도여행','#제주맛집','제주맛집','#제주도맛집','한라산','#한라산','#제주카페','#올레길','올레길','제주바다','#제주바다','#제주카페']
keywords2=['협재해수욕장','#협재해수욕장','모슬포항','#모슬포항','올인촬영지','#올인촬영지','성산일출봉','#성산일출봉']
keywords1=['제주동부여행','종달리마을','헤모랏',
'송달리마을',
"원데이클래스",
"사려니 숲",
'성게밥',
'전복비빔밥',
"월정리",
"제주여행지",
"아침미소목장",
"맛있는폴부엌",
"새별오름",
"돌마을공원",
"협재해수욕장",
"제주카페",
'우도',
"제주흑돼지",
"성산",
"성산일출봉",
'#제주동부여행','#종달리마을','#헤모랏'
'#송달리마을',
"#원데이클래스",
"#사려니 숲",
"#월정리",
"#제주여행지",
"#아침미소목장",
"#맛있는폴부엌",
"#새별오름",
"#돌마을공원",
"#협재해수욕장",
"#제주카페",
"#제주흑돼지",
"#성산",
"#성산일출봉"]
spam=' -RT -마사지 -영덕 -#제주호스트빠 -#출장안마 -#수앤수 -010 -오설록 -#제주호빠 -#제주콜걸 -#초대남 -한라산볶음밥 -#뜨겁게 -유흥 -#제주출장샵 -쿠폰'

keywordSet=[]
for i in range(0,len(keywords)):
    keywordSet.insert(0,keywords[i] + spam)

#keyword='제주도여행 -RT -#제주호스트빠 -#출장안마 -#수앤수 -010 -오설록 -#제주호빠 -#제주콜걸 -#초대남 -한라산볶음밥'
result=[]
success_num=0
for k in range(0, len(keywordSet)):
    for i in range(1,3):
        tweets = api.search(keywordSet[k])
        for tweet in tweets:
            #print([tweet.id_str, tweet.text, tweet.created_at])
            try:
                cur.execute("""INSERT INTO tweeter(id, content, date) VALUES(%s,%s,%s)""",(tweet.id_str, tweet.text, tweet.created_at))
                cur.connection.commit()
                success_num +=1
                print("success")
            except pymysql.err.IntegrityError as e:
                print("데이터 중복 ")
            except pymysql.err.InternalError as e:
                print(e)
            
#print(len(result))
print(success_num)
#print(result)

#idea : 웹상에서 자신이 추천경로를 작성해서 입력하면 데이터베이스에 입력되도록 
"""
제주
제주도
제주여행
제주도여행
제주맛집
jeju
#제주 -RT -#제주호스트빠 -#출장안마 -#수앤수 -010
제주국제공항
용머리해안
신비의도로(도깨비도로)
우도
성산일출봉
외돌개
황우지
대포해안주상절리대
식물원
한라산
마라도
#한라산
한라산 국립공원
우도
함덕 서우봉 해변
협재 해수욕장
만장굴
한림공원
비자림
동문 재래시장
에코랜드 테마파크
산굼부리 분화구
제주김녕미로공원
월정리해변
신비의도로
제주돌문화공원
용두암
흑돼지거리
"""