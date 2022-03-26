import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "../Styling/Homepage.css"
import Logo from '../Styling/BBNaija eye (2).png'


class Homepage extends React.Component {
   
    render() { 
        // const isPlaying = this.state.isPlaying;
        // let button;

        // if(isPlaying){
        //     button = <Middle onClick={this.handlePickedOdds} />
        // }else{
        //     button = <Middle onClick={this.handlePickedOdds} />
        // }
        return (
            <div className="Whole-div">
                <Header />
                <Body />
            </div>

        );
    }
}
function Header(props){
    return(
        <div className="main-head">
            <h2 className="bigLogo-name">
                <div className="logo">
                    <img src={Logo} alt="" height="60" className="log" />
                </div>
                <p className="logo-name">bet</p>
            </h2>
        </div>
    )
}
function Body (props){
    return(
        <div className="bet-body">
            <Side />
            <Middle />
            <Aside  />
        </div>
    )
}
 function Side(props){
     return(
        <div className='main-side'>
        <h1 className='numHouseMates'> Present Housemates</h1>
        <div className="present-div">
        <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/75AE/production/_119562103_boma.jpg.webp" alt="Boma" sizes="" srcset="" className="boma" width="200" height="119.4" />
        <div className="about1-wordings" ><h2 className="about1-wordings">Boma</h2></div>
        <div class="present"><h2>In house</h2></div>
        </div>
        <div className="present-div">
        <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/C3CE/production/_119562105_saga.jpg.webp" alt="saga" sizes="" srcset="" className="boma" width="200" height="119.4" />
        <div className="about1-wordings" ><h2 className="about1-wordings">Saga</h2></div>
        <div class="present"><h2>In house</h2></div>
        </div>
        <div className="present-div">
        <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/16BC6/production/_119562139_yousef.jpg.webp" alt="Yousef" sizes="" srcset="" className="boma" width="200" height="119.4" />
        <div className="about1-wordings" ><h2 className="about1-wordings">Yousef</h2></div>
        <div class="present"><h2>In house</h2></div>
        </div>
    </div>
     )
 }

 function Middle(props){
     return(
         
        <div className='housemate-div'>
        <h1 className="title-middle">Housemates up for eviction</h1>
        <div className="arrange-div">
            <div className="picture-div1">
                <div className="part-img">
                <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/F592/production/_119566826_bbnaijafemale.jpg.webp " alt="Angel" sizes="(min-width: 50px)" srcset="" width="200" height="119.4" />
               <div className="about1-wordings" ><h2 className="about1-wordings">Angel</h2></div>
                </div>
                <div className="odds-div">
                    <div className="odds-name">
                        <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                    </div>
                    <div className="odds-figure" >
                        <h3 className="figure-stay" >2.37</h3><h3 className="figure-leave">37.2</h3>
                    </div>
            </div>
            <div className="picture-div2">
            <div className="part-img">
                <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/362A/production/_119566831_peacebbnaijacapture.jpg.webp " alt="Peace" sizes="" srcset="" width="200" height="119"/>
                <div className="about1-wordings" ><h2 className="about1-wordings">Peace</h2></div>
                </div>
                <div className="odds-div">
                    <div className="odds-name">
                        <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                    </div>
                    <div className="odds-figure">
                        <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                    </div>
            </div>
            <div className="picture-div3"> 
            <div className="part-img">
                <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/13FDE/production/_119568818_jackiebbnaijacapture.jpg.webp " alt="Jackie B" sizes="" srcset="" width="200" height="119.6" />
                <div className="about1-wordings" ><h2 className="about1-wordings">Jackie B</h2></div>
                </div>
                <div className="odds-div">
                    <div className="odds-name">
                        <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                    </div>
                    <div className="odds-figure">
                        <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                    </div>
            </div>
        </div>
        <div className="arrange-div">
            <div className="picture-div1">
                <div className="part-img">
                <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/5966/production/_119568822_tegabbnaijacapture.jpg.webp " alt="Tega" sizes="" srcset=""width="200" height="119.6" />
                <div className="about1-wordings" ><h2 className="about1-wordings">Tega</h2></div>
                </div>
                <div className="odds-div">
                    <div className="odds-name">
                        <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                    </div>
                    <div className="odds-figure">
                        <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                    </div>
            </div>
            <div className="picture-div2">
            <div className="part-img">
                <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/EEA8/production/_119569016_liquorose.jpg.webp " alt="Liquorose" sizes="" srcset="" width="200" height="119.6"/>
                <div className="about1-wordings" ><h2 className="about1-wordings">Liquorose</h2></div>
                </div>
                <div className="odds-div">
                    <div className="odds-name">
                        <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                    </div>
                    <div className="odds-figure">
                        <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                    </div>
            </div>
            <div className="picture-div3"> 
            <div className="part-img">
                <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/231A/production/_119568980_mariabbnaijacapture.jpg.webp " alt="Maria" sizes="" srcset=""width="200" height="119.6" />
                <div className="about1-wordings" ><h2 className="about1-wordings">Maria</h2></div>
                </div>
                <div className="odds-div">
                    <div className="odds-name">
                        <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                    </div>
                    <div className="odds-figure">
                        <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                    </div>
            </div>
        </div>
        <div className="arrange-div">
            <div className="picture-div1">
                <div className="part-img">
                <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/15820/production/_119569088_beatricecapture.jpg.webp " alt="Beatrice" sizes="" srcset="" width="200" height="119.6"/>
                <div className="about1-wordings" ><h2 className="about1-wordings">Beatrice</h2></div>
                </div>
                <div className="odds-div">
                    <div className="odds-name">
                        <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                    </div>
                    <div className="odds-figure">
                        <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                    </div>
            </div>
            <div className="picture-div2">
            <div className="part-img">
                <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/71A8/production/_119569092_princessbbnaijacapture.jpg.webp " alt="Princess Francis" sizes="" srcset="" width="200" height="119.6" />
                <div className="about1-wordings" ><h2 className="about1-wordings">Princess Francis</h2></div>
                </div>
                <div className="odds-div">
                    <div className="odds-name">
                        <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                    </div>
                    <div className="odds-figure">
                        <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                    </div>
            </div>
            <div className="picture-div3"> 
            <div className="part-img">
                <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/10DE8/production/_119569096_saskaycapture.jpg.webp" alt="Saskay" sizes="" srcset="" width="200" height="119.6" />
                <div className="about1-wordings" ><h2 className="about1-wordings">Saskay</h2></div>
                </div>
                <div className="odds-div">
                    <div className="odds-name">
                        <h3 className="odds-stay">S</h3><h3 className="odds-leave">L</h3></div>
                    </div>
                    <div className="odds-figure">
                        <h3 className="figure-stay">2.37</h3><h3 className="figure-leave">37.2</h3>
                    </div>
            </div>
        </div>
        <div className="odd-div">
    <h1 className="count">
        Bet Slip <div>1</div>
    </h1>
    {/* <svg  height="100" width="500" >
<circle cx="160" cy="55" rx="75" ry="40" fill="yellow" />
<ellipse cx="120" cy="55" rx="65" ry="40" style="fill:purple" />
<ellipse cx="152" cy="55" rx="36" ry="32.5" style="fill:red" />
<ellipse cx="152" cy="55" rx="5" ry="5" style="fill:black" />
</svg> */}
</div>        



    </div>
     )
 }
 function Aside(props){
     return(
        <div className='evictedmate-div'>
        <h1 className="evict-title">Evicted Housemates</h1><i class="fa fa-arrow-circle-o-left" aria-hidden="true" id="arrow-evict"></i>
        <div className="evict-div">
             <img src="https://ichef.bbci.co.uk/news/800/cpsprodpb/16BC6/production/_119562139_yousef.jpg.webp" alt="Yousef" sizes="" srcset="" className="boma" width="200" height="119.4" />
         <div className="about1-wordings" ><h2>Yousef</h2></div>
         <div className="evicted-div"><h2>Evicted</h2></div>
        </div>    

    </div>
     )
 }
export default Homepage;