import './bootstrap.css'
import './mystyle.css'
import React,{Component} from 'react'
import moment from 'moment'

class Day extends Component {
	constructor(props)	{
		super(props)
						}
	render(){		
		const {number,amount,isWeekend,isToday,isSelect}=this.props
		let indent=0;
		if(amount<2){indent=4}
			else if(indent<4){indent=3}
				else if(indent<6){indent=1}
		const width=(Math.floor(63/amount))-indent
		const styleWidth=width+'px'
		const colors = isWeekend ? 'red':'black'	
		const Today=isToday && <section>&bull;</section>
		const select = isSelect ? "current_day" :""
		let events=[]
		for (let i = 0; i < amount; i++) {
			if (i>((amount/2)-1)){
				events.push(
                 <td key={i*1}><div id="rectangle2" style={{width:styleWidth,float:"right"}}></div></td>);
			}else
			{events.push(
                 <td key={i*1}><div id="rectangle2" style={{width:styleWidth}}></div></td>);}
        }
		return(
			<div className="" id={select} style={{cursor: 'pointer'}} onClick={() => {
			let returns = moment(number).startOf("month").add(parseInt(moment(number).format("D"))-1,"day");
			this.props.onClick(returns)}}>
				<div className="current_day" style={{height:'10px',width:'63px',textAlign:'center'}}>
					{Today}
				</div>
				<div  style={{height:'32px',width:'63px',textAlign:'center',color:colors}} className="number">
					{parseInt(moment(number).format("DD"))}
				</div>
				<div className="has_events" style={{height:'10px',width:'100%'}}>
					<table width="100%"><tbody><tr>{events}</tr></tbody></table>
				</div>
			</div>	
		)	}	
							}
export default Day
