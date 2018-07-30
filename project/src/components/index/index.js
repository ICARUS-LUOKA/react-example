import React,{Component} from 'react'
import Banner from './banner'
import Nav from './nav'
import Hot from './hot'
import Special from './special'
import Slider from './slider';
class Index extends Component{
    render(){
        return (
            <div>
                <Banner />
                <Nav />
                <Hot />
                <Slider />
                <Special />
            </div>
            
        )
    }
}

export default Index