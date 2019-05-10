import './index.css'
import './mystyle.css'
import React,{PureComponent} from 'react'
import moment from 'moment'
import Thead from './Thead.js'
import Tbody from './Tbody.js'
import Tfoot from './Tfoot.js'

class Calendar extends PureComponent {
	constructor(props)	{
		super(props)
		this.state={
		events_today:[],
        week_month:false,
        real_select_day:moment(),
        real_select_date:moment(),
        blank_day_of_year:null,
        new_event:[],
        prev_month:moment().month(),
        next_month:moment().month(),
        chooseWeekOnce:true,
        events_lists:[]
					}
	this.select_week=this.select_week.bind(this)
	this.select_month=this.select_month.bind(this)
	this.chooseMonth=this.chooseMonth.bind(this)
	this.chooseWeek=this.chooseWeek.bind(this)
	this.add_event=this.add_event.bind(this)
	this.delete_event=this.delete_event.bind(this)
						}
	render(){
if (this.state.chooseWeekOnce){
this.state.prev_month=moment(this.state.real_select_day).startOf('week').month();
this.state.next_month=moment(this.state.real_select_day).endOf('week').month();
}
if (this.state.week_month){}
for(let i=0;i<moment().weeksInYear();i++){
}
let date_for_week_year=Object.assign({}, this.state.real_select_date);
date_for_week_year=moment(date_for_week_year).dayOfYear(1);
if (this.state.events_lists!=null){this.state.events_lists = JSON.parse(localStorage.getItem("Events_list3"))}
this.state.events_today=[];
let id_today_events_lists=0;
let events_length=0;
if(this.state.events_lists!=null){ for (let i = 0; i < this.state.events_lists.length; i++) {
 	events_length=events_length+this.state.events_lists[i]["events"]["length"];
 }}
 if(this.state.events_lists!=null){for (let i = 0; i < this.state.events_lists.length; i++) {
 		if (moment(this.state.real_select_day).format("DD.MM.YYYY")==this.state.events_lists[i]['date']){
 				id_today_events_lists=i;
 			for (let k = 0; k < this.state.events_lists[i].events.length; k++) {
 				this.state.events_today.push(this.state.events_lists[i].events[k]);
 			} 		}       }}
if (this.state.new_event.length!=0){
	if(this.state.events_today.length!=0){	
		this.state.events_lists[id_today_events_lists]["events"].push({"name":this.state.new_event[0]["name"],"body":this.state.new_event[0]["body"],
			"time":this.state.new_event[0]["time"],"id":this.state.new_event[0]["id"]});
			localStorage.setItem('Events_list3', JSON.stringify(this.state.events_lists));
		this.state.new_event=[];
	}
		else{		
			this.state.events_lists = this.state.events_lists||[];
			this.state.events_lists.push({"date":moment(this.state.real_select_day).format("DD.MM.YYYY"),"events":this.state.new_event});
			localStorage.setItem('Events_list3', JSON.stringify(this.state.events_lists));
			this.state.new_event=[];
			}
			this.forceUpdate();
}
		return(
			<div className="card-body fonts" id="font_google" >
				<div className="jumbotron">
					<table className="table_main mx-auto" style={{width:'440px'}}>
						<thead  style={{background:'#0b3157',color:'#ffffff'}}>
						<tr><th>
						<Thead nextMonth={this.nextMonth} prevMonth={this.prevMonth} 
						select_week={this.select_week} select_month={this.select_month} weekMonth={this.state.week_month} weeks_target_down={this.weeks_target_down}
						weeks_target_up={this.weeks_target_up} chooseMonth={this.chooseMonth} real_data={this.state.real_select_date} chooseWeek={this.chooseWeek}
						prev_month={this.state.prev_month} next_month={this.state.next_month} real_select_day={this.state.real_select_day}
						/>
						</th></tr>
						</thead>
						<tbody style={{background:'#ffffff'}}>
						<tr><td><Tbody   events_lists={this.state.events_lists} 
						All_events={this.state.events_lists} weekMonth={this.state.week_month} week_target={this.state.week_target} 
						select_days={this.select_days}  updateData={this.updateData} real_data={this.state.real_select_date} 
						real_select_day={this.state.real_select_day}  selec_day={moment(this.state.real_select_day).format("D")}
						/></td></tr>
						</tbody>
						<tfoot className="" style={{background:'#0b3157',color:'#ffffff',height:'100%'}} >
						<tr><td><Tfoot    events_lists={this.state.events_lists}  
						real_data={this.state.real_select_date} events_today={this.state.events_today}	add_event={this.add_event} 
						real_select_day={this.state.real_select_day} delete_event={this.delete_event}
						/></td></tr>
						</tfoot>
					</table>
				</div>
			</div>	
		)	}	
updateData = (value1) => {	
this.setState({ real_select_day: moment(value1),
prev_month:moment(value1).startOf('week').month(),
next_month:moment(value1).endOf('week').month()
 })
}
delete_event = (value1) => 				{
let temp_events_lists=this.state.events_lists.slice();
	if (this.state.temp_events_lists!=="undefined")			{
		for (let i=0;i<temp_events_lists.length;i++)				{
			for (let k=0;k<temp_events_lists[i]["events"]["length"];k++)		{
				if (temp_events_lists[i]["events"][k]["id"]==value1)						{
					console.log('999',temp_events_lists[i]["events"][k]["id"],value1,temp_events_lists[i]["events"][k]["id"]==value1)
						temp_events_lists[i]["events"].splice(k, 1);
		}	}	}	}
for (let i=0;i<temp_events_lists.length;i++){		
	if (temp_events_lists[i]["events"]["length"]==0){
		temp_events_lists.splice(i, 1);
	}	}
localStorage.setItem('Events_list3', JSON.stringify(temp_events_lists));
this.state.events_lists = JSON.parse(localStorage.getItem("Events_list3"))
this.forceUpdate();
}
chooseMonth = (argument) => {
	let real_select_dates = Object.assign({}, this.state.real_select_date);
	if (argument){
		real_select_dates = moment(real_select_dates).add(1, "month");}else{real_select_dates = moment(real_select_dates).subtract(1, "month");}
  this.setState({
            real_select_date: real_select_dates,
            real_select_day:moment(real_select_dates).startOf("month")
        });
}
chooseWeek = (argument) => {
	let real_select_dates = Object.assign({}, this.state.real_select_day);
	let select_day_week=Object.assign({}, this.state.real_select_day);
	if (argument){
		real_select_dates = moment(real_select_dates).add(1, "week");select_day_week= moment(select_day_week).add(1, "week");
	}else{
		real_select_dates = moment(real_select_dates).subtract(1, "week");select_day_week= moment(select_day_week).subtract(1, "week");
	}
		let prevMonths = moment(real_select_dates).startOf('week').month();
		let nextMonths = moment(real_select_dates).endOf('week').month();	
  this.setState({
            real_select_date: real_select_dates,
            prev_month:prevMonths,
            next_month:nextMonths,
            real_select_day:moment(select_day_week).startOf('week'),
            chooseWeekOnce:false
        });
}
add_event = (argument1,argument2,argument3) => {
	let id=0;
	id=moment(this.state.real_select_day).format("DD.MM.YYYY");
	id=id.replace(/[.]/g, "");
	id=id+argument3.replace(/[:]/g, "")+argument1.replace(/[ ]/g, "").replace(/[	]/g, "")+argument2.slice(1,10);
	if (!((argument1.length==0)||(argument2.length==0)||(argument3.length==0))){
	let temp_mas=[];
	temp_mas.push({
"name":argument1,
"body":argument2,
"time":argument3,
"id":id
})
  this.setState({
            new_event: temp_mas
        });}
}
select_week = function select_week() {
  this.setState({
    week_month:this.state.week_month?true:true//,
  });
};
select_month = function select_month() {
  this.setState({
    week_month:this.state.week_month?false:false,
    real_select_day:moment(this.state.real_select_day).startOf("month")
  });
};		
							}
export default Calendar