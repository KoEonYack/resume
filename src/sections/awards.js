import React from 'react'

function awards() {
    return (
        <section>
            <h2>Awards<span className="period-mark">.</span></h2>
            <div className="other"> 
                <h3>2020 오픈소스 컨트리뷰톤 가이바기업후원상<span className="period-mark">.</span></h3>
                <span className="role">주최. 과학기술정보통신부</span>
                <span className="time"><time dateTime="2020-11">수상일. 2020. 11. 30.</time></span> 
                <p> 
                    Interconnector for the Platform based SaaS delivery프로젝트인 NexCliper Open Source Edition :: Klevr를 개선하였습니다.  <br />
                    <a href="https://github.com/NexClipper/klevr/pulls?q=is%3Apr+author%3Akoeonyack"> PR List</a>
                </p>
            </div>
            <div className="other"> 
                <h3>2019 한국컴퓨터종합학술대회 학부생 논문경진대회 우수상<span className="period-mark">.</span></h3>
                <span className="role">주관. 한국정보과학회</span>
                <span className="time"><time dateTime="2020-08">수상일. 2019. 08. 12.</time></span> 
                <p> 
                   19년 1학기 캡스톤의 결과물 중 하나인 논문입니다. 
                   오픈소스로 공개된 Python 웹 애플리케이션 정적 분석 도구를 총체적으로 조사하여 각 정적분석기들의 결함 탐지 패턴을 비교하였습니다. <br />
                   <a href="http://www.riss.kr/search/detail/DetailView.do?p_mat_type=1a0202e37d52c72d&control_no=a6ad7eeb5b6e185ec85d2949c297615a">[Riss] Python 웹 어플리케이션의 보안취약점 탐지를 위한 오픈소스 정적 결함 검출 도구의 총체적 조사</a>                
                </p>
            </div>
            <div className="other"> 
                <h3>제6회 개발보안 경진대회 최우수상(행정안전부 장관상)<span className="period-mark">.</span></h3>
                <span className="role">주관. 행정안전부, 한국인터넷진흥원</span>
                <span className="time"><time dateTime="2018-08">수상일. 2019. 10. 17</time></span> 

                <ul> 
                    <li> Django로 벡엔드 개발을 하였으며  Auzer를 이용하여 배포하였습니다.   </li> 
                    <li> 상용 정적 분석 도구 Sparrow에서 어떠한 보안 취약점이 발견되지 않아 보안점수에서 만점을 받았습니다. </li> 
                    <li> <a href="https://github.com/KoEonYack/Everyone-Exercis"> Github. Code </a> | <a href="https://covenant.tistory.com/121"> Blog. 후기 </a>
                    </li> 
                </ul>
            </div>
            <div className="other"> 
                <h3>18-19년 SW중심대학 포트폴리오 경진대회 수상<span className="period-mark">.</span></h3>
                <span className="time"><time dateTime="2018-08">수상일: 2018. 06.</time> - 2019. 06</span> 
                <p> 18년부터 19년 6월까지 한동대학교 SW중심대학 포트폴리오 경진대회에서 수상하였습니다.  </p> 
            </div>
            <div className="other"> 
                <h3>17-19년 SW중심대학 장학생 선정<span className="period-mark">.</span></h3>
                <span className="time"><time dateTime="2017-06">수상일: 2017. 06.</time> - 2019. 06</span> 
                <p> 2017년 06월부터 2019년 06월까지 한동대학교 SW중심대학 장학생으로 선정되었습니다. </p>
            </div>
            <div className="other"> 
                <h3>SW융합경진대회 우수상<span className="period-mark">.</span></h3>
                <span className="time"><time dateTime="2017-06">수상일: 2017. 12.</time></span> 
                <p> 교내 SW융합경진대회에서 '스마트 신호 교통체계'주제로 우수상을 수상하였습니다. </p>
            </div>
        </section>
    )
}

export default awards
