import React from 'react'

function works() {
    return (
        <div>
            <h2>Work Experience<span className="period-mark">.</span> </h2>
            <div className="row">
                <div className="row-left">
                    <h3>11번가<span className="period-mark">.</span></h3>
                    <span className="role">회원플랫폼개발팀 </span>
                    <span>
                        <time dateTime="2021-01">2021. 01</time> - 현재
                    </span>
                </div>
                <div className="row-right">
                    <h4> 고객의무확인 솔루션 연동 </h4>
                    <span className="time">
                        <time dateTime="2021-03">2022. 01</time> - 2022. 02
                    </span>
                    <p>aaa


                    </p>
                    <h5>Tech Stack<span className="period-mark">.</span></h5>
                    <p>
                        <span className="inner-button">JAVA</span> 
                        <span className="inner-button">Spring Boot</span> 
                        <span className="inner-button">Spring Security</span> 
                        <span className="inner-button">Mybatis</span> 
                        <span className="inner-button">Redis</span> 
                        <span className="inner-button">Oracle DB</span> 
                    </p>

                    {/* end block  */}
                    <br />
                    <br />
                    <br />
                    <br />
                    
                    <h4> 개인정보 추출 시스템 </h4>
                    <span className="time">
                        <time dateTime="2021-03">2021. 05</time> - 2021. 09
                    </span>
                    <h5>Description<span className="period-mark">.</span></h5>
                    <p> 당첨자 결과 조회 등 타 팀에서 고객의 개인정보 조회 요청건을 팀의 개발자가 직접 쿼리를 실행하여 <br />
                         개인정보를 추출하던 프로세스를 개선하고자 개인정보 추출 요청 / 승인 프로세스가 있는 웹 서비스를 구축하였습니다. </p>
                    
                    <h5>What did I do<span className="period-mark">.</span></h5>
                    <ul> 
                        <li> 수동으로 개발자가 직접 쿼리를 실행하던 한 달 평균 50건의 개인정보 추출 요청건을 자동화하였습니다. </li> 
                        <li> 사내 인프라를 이용하여 개발/검증/상용 및 배포 시스템을 구축하였습니다. </li>
                        <li> 스프링 시큐리티를 이용하여 사내 인증 API 연동(IDMS)으로 인증/인가 구현하였습니다. </li> 
                        <li> 스케줄러를 이용하여 메일 발송 자동화하였습니다. </li>
                    </ul>

                    <h5>Tech Stack<span className="period-mark">.</span></h5>
                    <p>
                        <span className="inner-button">JAVA</span> 
                        <span className="inner-button">Spring Boot</span> 
                        <span className="inner-button">Spring Security</span> 
                        <span className="inner-button">Querydsl</span> 
                        <span className="inner-button">Mybatis</span> 
                        <span className="inner-button">Redis</span> 
                        <span className="inner-button">Oracle DB</span> 
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="row-left">
                    <h3>올림플래닛<span className="period-mark">.</span></h3>
                    <span className="role">Backend Developer</span>
                    <span>
                        <time dateTime="2020-06">2020. 06</time> - 2020. 12
                    </span>
                </div>
                <div className="row-right">
                    <h4>메타버스 공간 제작 서비스</h4>
                    <span className="time">
                        <time dateTime="2020-06">2020. 06</time> - 2020. 12 
                    </span>
                    <h5>Description<span className="period-mark">.</span></h5>
                    <p> 3D 메타버스 공간을 만들 수 있는 웹 도구 초기 개발 설계부터 정식 릴리즈까지 개발하였습니다.  <br />
                    웹에서 손쉽게 메타버스 공간을 제작할 수 있으며 웹으로 배포할 수 있습니다.  <br />
                    제작된 공간을 언리얼로 추출, 웹 상에 언리얼 정보를 업로드할 수 있는 상호 호환을 지원하였습니다. <br />
                    
                    </p>
                    
                    <h5>What did I do<span className="period-mark">.</span></h5>
                    <ul> 
                        <li> Go(Gin-gonic 프레임워크)언어로 API 설계를 하였습니다. </li> 
                        <li> 다양한 정적분석 오픈소스를 활용하여 코드 품질을 관리하였습니다. </li>
                        <li> 동적 쿼리를 활용하기 위하여 직접 모듈을 개발하였습니다. </li> 
                        <li> Rancher로 관리하는 Kubernetes 환경에 Docker를 이용하여 배포하였습니다. </li> 
                        <li> 내부 인증 서버, 아임포트 결제 모듈을 연동하였습니다. </li> 
                    </ul>

                    <h5>Tech Stack<span className="period-mark">.</span></h5>
                    <p>
                        <span className="inner-button">Go</span> 
                        <span className="inner-button">Gin-gonic</span>
                        <span className="inner-button">Beego</span>
                        <span className="inner-button">GORM</span>
                        <span className="inner-button">MySQL</span> 
                        <span className="inner-button">Docker</span> 
                        <span className="inner-button">AWS</span> 
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="row-left">
                    <h3>한글과컴퓨터 GMD<span className="period-mark">.</span></h3>
                    <span className="role">현장실습</span>
                    <span>
                        <time dateTime="2020-06">2019. 06</time> - 2019. 08 
                    </span>
                </div>
                <div className="row-right">
                    <h4>사내 내부 프로젝트</h4>
                    <span className="time">
                        <time dateTime="2020-06">2019. 06</time> - 2019. 08 
                    </span>
                    <h5>Description<span className="period-mark">.</span></h5>
                    <p> SVN으로 관리하는 JSON파일을 분석 윈도우 프로그램을 개발하여 사내 개발자들이 내부에서 <br />  개발의 편의성을 높일 도구를 개발하였습니다. </p>
                    
                    <h5>What did I do<span className="period-mark">.</span></h5>
                    <ul> 
                        <li> 요구사항에 맞는 소프트웨어의 설계, 개발하였습니다. </li>
                        <li> WPF를 이용하여 UI 제작하였습니다. </li>
                    </ul>

                    <h5>Tech Stack<span className="period-mark">.</span></h5>
                    <p>
                        <span className="inner-button">C#</span> 
                        <span className="inner-button">WPF</span>  
                    </p>
                </div>
            </div>
        </div>
    )
}

export default works
