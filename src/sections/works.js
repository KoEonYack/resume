import React from 'react'

function works() {
    return (
        <div>
            <h2>Work Experience<span className="period-mark">.</span> </h2>
            <div className="row">
                <div className="row-left">
                    <h3>올림플래닛<span className="period-mark">.</span></h3>
                    <span className="role">Backend Developer</span>
                    <span>
                        <time dateTime="2020-06">2020. 06</time> - 현재
                    </span>
                </div>
                <div className="row-right">
                    <h4>사내 내부 프로젝트</h4>
                    <span className="time">
                        <time dateTime="2020-06">2020. 06</time> - 현재 
                    </span>
                    <h5>Description<span className="period-mark">.</span></h5>
                    <p>  360' img를 생성 및 수정할 수 있는 내부 서비스를 개발하고 있습니다.</p>
                    
                    <h5>What did I do<span className="period-mark">.</span></h5>
                    <ul> 
                        <li> Gin-gonic을 이용하여 RESTfull 설계를 하였습니다. </li> 
                        <li> Go report, GORM 등 다양한 오픈소스를 활용하여 code quality check, ORM을 활용합니다. </li> 
                        <li> Travis CI 등을 이용하여 CI를 구축할 수 있고 활용하고 있습니다. </li> 
                        <li> Docker를 이용하여 배포합니다. </li> 
                    </ul>

                    <h5>Tech Stack<span className="period-mark">.</span></h5>
                    <p>
                        <span className="inner-button">Go(Gin-gonic)</span> 
                        <span className="inner-button">Docker</span> 
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
                    <p>SVN으로 관리하는 JSON파일을 분석하는 프로그램을 사내에서 요구한 요구사항에 맞추어 <br /> 사내 개발자들이 내부에서 사용할 도구를 개발하였습니다.</p>
                    
                    <h5>What did I do<span className="period-mark">.</span></h5>
                    <ul> 
                        <li>WPF를 이용하여 UI를 설계, 개발하였습니다. </li>
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
