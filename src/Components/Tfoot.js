import './index.css'
import './bootstrap.css'
import './mystyle.css'
import './font-awesome.min.css';
import React,{PureComponent} from 'react'

class Tfoot extends PureComponent {
	constructor(props)	{
		super(props)
		this.state={
			hasEvents:null,
			Enter:null,
			events_today:[]
					}
		this.onButtonClick=onButtonClick.bind(this)
						}
    	render(){
		this.hasEvents=true;
		let copy_event_today=(this.props.events_today).slice();
		let min_znach=0;
		let temp_znach=0;
		for(let k=0; k<copy_event_today.length;k++){
		for(let i=0; i<copy_event_today.length-1;i++){
			if (copy_event_today[i]["time"]>copy_event_today[i+1]["time"]){			
				temp_znach=copy_event_today[i];		copy_event_today[i]=copy_event_today[i+1];		copy_event_today[i+1]=temp_znach;				
			}		}	}
const No_Events=(!(this.state.Enter)) &&<div>
				<span className="vertical_align" style={{float:'left',height:'40px'}}>{(!this.hasEvents) && "No Events"}
				</span><span style={{float:'right',margin:"3px 0px 0px 0px"}}><span className="Add_event">{"Add event"}</span>&nbsp;&nbsp;
				<i className="fa fa-plus-square-o" id="p_circle" aria-hidden="true" style={{color:'#48c1c2',height:'40px',margin:"2px 4px 0px 0px",cursor: 'pointer'}} 
				onClick={this.onButtonClick}></i></span>
			</div>	
const Entering=this.state.Enter && <div style={{width:'440px'}}>
	<i className="fa fa-times" aria-hidden="true" id="p_circle" style={{color:'#48c1c2',float:'left',height:'40px',margin:'0px 0px 0px 0px',cursor: 'pointer'}} 
	onClick={this.onButtonClick}></i>
	<i className="fa fa-check" aria-hidden="true" id="p_circle" style={{color:'#48c1c2',float:'right',height:'40px',margin:'0px 10px 0px 3px',cursor: 'pointer'}} 
	onClick={() => {this.onButtonClick(); this.props.add_event(document.getElementById('Title_enter').value,document.getElementById('Description_enter').value,
		document.getElementById('Time_enter').value)}}></i>
 <form >
  <div style={{margin:'4px'}}>
    <input type="text" className="form-control inputL" id="Title_enter" placeholder="Enter title" style={{width:'35%',margin:'5px 10px 0px 0px'}} ref = "Pole_1"/>
    <label className="" style={{margin:'8px 6px 0px 16px'}}>When</label> 
    <input type="time" className="form-control inputR" id="Time_enter" placeholder="HH:MM"style={{width:'25%',margin:'5px 0px 0px 0px'}} ref = "Pole_2"/>
    <br/><br/>
    <input type="text" className="form-control" id="Description_enter" placeholder="Description" style={{margin:'5px 0px 0px 0px'}} ref = "Pole_2"/>
    </div>
</form>
</div>
	const eventElements = (!(this.state.Enter))&& copy_event_today.map((event,index) =>
		<div key={index*3} style={{color:'black'}}>
		<br/>
		<div  className="article-list__li" >

						<div className="card mx-auto">
				<div className="card-header">
					<h2>
						{event.name}
					</h2>
					<h6 className="card-subtitle text-muted">
						Time&nbsp;{event.time}
					</h6>
				</div>
				<div className="card-body">	
					<span>{event.body}</span><span><i className="fa fa-trash" id="icon5" aria-hidden="true" style={{float:"right",color:'#48c1c2'}}
					onClick={() => { this.props.delete_event(event.id)}}></i>
					</span>
				</div>			
			</div>
			</div>
		</div>)
		return(
			<div style={{height:'100%'}}>
			
					<div>
					<div>{No_Events}</div>
					<div>{Entering}</div></div>	
					<div><br/>{eventElements}</div>
				</div>	
		)	}	
}
function onButtonClick() {
	this.setState({
		Enter:this.state.Enter ? false: true
	});
}
export default Tfoot