import React from 'react'

function projects() {
    return (
        <section>
            <h2>Side Projects<span className="period-mark">.</span></h2>
            
            <div className="other">
                <h3>교내 수업 대시보드 제작<span className="period-mark">.</span></h3>
                <span className="time"><time dateTime="2020-05">2020. 04. 10.</time> - 2020. 04. 11.</span> 
                <ul> 
                    <li> 
                        Tech Stack: &nbsp;
                        <span className="inner-button">React</span> 
                        <span className="inner-button">HTML</span> 
                        <span className="inner-button">CSS</span> 
                    </li>
                    <li> 
                        <a href="https://koeonyack.github.io/aiforall-dashboard/ "> Web Page</a> | 
                        <a href="https://github.com/KoEonYack/aiforall-dashboard"> Github </a>
                    </li> 
                    <li> 생들에게 원활한 공지를 위하여 교내 '모두를 위한 인공지능의 활용' 수업에서 사용할 대시보드를 개발하였습니다. </li> 
                    <li> 한눈에 수업 강의 및 과제 기간을 알아볼 수 있도록 제작하였습니다.  </li> 
                </ul>
            </div>
            <div className="other">
                <h3>나의 가는 길 - 웨일 브라우저 확장앱<span className="period-mark">.</span></h3>
                <span className="time"><time dateTime="2019-10">2019. 10. 08.</time> - 2019. 11. 11.</span> 
                <ul>
                    <li> 
                        Tech Stack: &nbsp;
                        <span className="inner-button">HTML</span> 
                        <span className="inner-button">CSS</span> 
                        <span className="inner-button">Javascript</span> 
                    </li>
                    <li> 
                        <a href="https://store.whale.naver.com/detail/fokfogbddicgbklmjpmbjahojlojhklg "> 웨일 스토어 </a> | 
                        <a href="https://github.com/whale-lab/my-path"> Github </a>
                    </li> 
                    <li> 개발자 2명, 디자이너 1명으로 Front-end 부분을 개발하였습니다. </li>
                    <li> 네이버 지도에 메모 기능을 지원하기 위해서 개발하였습니다. 처음 출시 한지 한 달 동안 다운로드 수 상위 5위였으며 2020. 08. 17. 기준 2,107명이 사용 중입니다. </li>
                </ul>
            </div>

            <div className="other"> 
                <h3>네모: 넷이 모여 떠나는 여행<span className="period-mark">.</span></h3>
                <span className="time"><time dateTime="2018-07">2018. 07. 23.</time> - 2018. 08. 04.</span> 
                <ul>
                    <li> 
                        Tech Stack: &nbsp;
                        <span className="inner-button">JSP</span> 
                        <span className="inner-button">MySQL</span> 
                        <span className="inner-button">HTML</span> 
                        <span className="inner-button">CSS</span> 
                        <span className="inner-button">Javascript</span> 
                    </li>
                    <li> 
                        <a href="https://github.com/KoEonYack/Nemo-Project"> Github </a>
                    </li> 
                    <li> 교내 학생들은 카카오톡 단체 채팅방에서 같이 KTX 예약할 학생들을 모집했습니다. 이를 체계적으로 모집하고 관리하기 위하여 본 서비스를 만들었습니다.  </li>
                    <li> 총 4명이 개발하였으며, 프로젝트 일정과 분업을 관리하는 프로젝트매니저를 맡았습니다. </li>
                    <li> 벡엔드 개발을 맡아서 모집 게시판 및 메인 페이지 디자인을 개발하였습니다. </li>
                </ul>
            </div>
            <div className="other"> 
                <h3>Covenant: 튜터와 학습자를 위한 공부방<span className="period-mark">.</span></h3>
                <span className="time"><time dateTime="2017-07">2017. 07. 20.</time> - 2017. 08. 14.</span> 
                <ul>
                    <li> 
                        Tech Stack: &nbsp;
                        <span className="inner-button">Django</span> 
                        <span className="inner-button">AWS EC2</span> 
                        <span className="inner-button">HTML</span> 
                        <span className="inner-button">CSS</span> 
                        <span className="inner-button">Javascript</span> 
                    </li>
                    <li> 
                        <a href="https://github.com/KoEonYack/covenant"> Github </a>
                    </li> 
                    <li> 프론트엔드 / 백엔드 기술환경 세팅 및 전체 기능을 구현하였습니다.  </li>
                    <li> 본교 튜터는 학생들에게 일일이 메일로 혹은 단체 대화방을 통해서 질문을 받고 답변하였습니다. 질문에 대한 공유 및 체계적인 관리를 위해 개발하였습니다. </li>
                    <li> 유사한 교내 서비스인 LMS가 출범하기 전까지 4달간 본 서비스를 활용하였습니다. </li>
                </ul>
            </div>
        </section>
    )
}

export default projects
