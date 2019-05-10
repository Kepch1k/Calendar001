import './index.css'
import './mystyle.css'
import React,{Component} from 'react'
import moment from 'moment'
import Day from './Day.js'

class Tbody extends Component {
	constructor(props)	{
		super(props)
		this.state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,
        selectedDay:moment().format("D"),
        select_day:null,
        week_month:true,
        firstweekend:"0",
        secondweekend:"6",
        today_months:moment().format("MM"),
        today_years:moment().format("YYYY"),
        today_day:moment().format("DD")
    }
}
	render(){
	const {events_lists,weekMonth}=this.props;
	this.state.week_month=weekMonth;
		let blanks = [];
        for (let i = 0; i < moment(this.props.real_select_day).startOf('month').format('d'); i++) {
            blanks.push(<td key={i * 80} className="emptySlot">
                {""}
                </td>
            );     }
     let amounts=0;
     let daysInMonth = [];
 	 let today_=moment(this.props.real_select_day).format("D"); 
 	 let today_month=this.state.today.format("MM"); 
 	 let today_year=moment(this.props.real_select_day).format("YYYY"); 
 	 let month_=moment(this.props.real_select_day).format("MM"); 
 	 let year_=moment(this.props.real_select_day).format("YYYY"); 
     let is_Today=false;
     let select_day=this.props.real_select_day;
     if  (select_day===undefined){select_day=today_};
    let yesno=false;
     let numberOfEvents=[];
 let dateContext = Object.assign({}, this.props.real_select_day); 
if((this.state.week_month) &&(events_lists!=null)){ 
  dateContext = moment(moment(this.props.real_select_day).startOf('week'));
     for (let i = 0; i < 7; i++) {
      if (i!=0){dateContext = moment(dateContext).add(1, "day");}    
      for (let k = 0; k < events_lists.length; k++) { 
        if (events_lists[k]["date"]===(dateContext.format("DD.MM.YYYY"))){
          let num=events_lists[k]["events"].length;   
            numberOfEvents.push(num);
            yesno=true;
          }
        }
        if (yesno){yesno=false;}else{
        numberOfEvents.push(0);}
      }
    }else if ((events_lists!=null)){dateContext = moment(dateContext).subtract(moment(this.props.real_select_day).format("DD")-1, "day");
     for (let i = 1; i <= moment(this.props.real_select_day).daysInMonth(); i++) {
     	 if (i!=1){dateContext = moment(dateContext).add(1, "day");}

     	for (let k = 0; k < events_lists.length; k++) {	
     		if (events_lists[k]["date"]===(dateContext.format("DD.MM.YYYY"))){
     			let num=events_lists[k]["events"].length;
            numberOfEvents.push(num);
            yesno=true;
        	}
        }
        if (yesno){yesno=false;}else{
        numberOfEvents.push(0);}   	
     	}
}
let tempdate=Object.assign({}, this.props.real_select_day);
let end_week_year=Object.assign({}, this.props.real_select_day);
tempdate=moment(tempdate).startOf('week');
let start_week=parseInt(moment(tempdate).format("D"));
end_week_year=(moment(end_week_year).startOf('year'));
end_week_year=moment(end_week_year).endOf('week').format("D");
       if (this.state.week_month)     
       {    let temp2 =this.props.real_select_day;
        		for (let d = 0; d <=6; d++) {
        			amounts=numberOfEvents[d];
                    let pereadacha_znach = (moment(temp2).startOf("week").add(d,'d'));
                    let temp_znach=parseInt((moment(temp2).startOf("week").add(d,'d')).format("DD"));
        			if (d==0||d==6){
        			if (today_year==year_ && temp_znach==this.state.today_day && today_month==month_){is_Today=true}else(is_Today=false)    
            daysInMonth.push(
                <td key={temp_znach}>
                    <Day number={pereadacha_znach} amount={amounts} isWeekend={true} isToday={is_Today} onClick={ this.props.updateData} isSelect={this.props.selec_day==temp_znach}
                    real_select_day={this.props.real_select_day} real_data={this.props.real_data} weekMonth={weekMonth}
                    />
                </td>
            );}else{
            	if (today_year==year_ && temp_znach==this.state.today_day && today_month==month_){is_Today=true}else(is_Today=false) 
              daysInMonth.push(
                <td key={temp_znach}>
                    <Day number={pereadacha_znach} amount={amounts} isWeekend={false} isToday={is_Today} onClick={ this.props.updateData} isSelect={this.props.selec_day==temp_znach}
                    real_select_day={this.props.real_select_day}  real_data={this.props.real_data} weekMonth={weekMonth}
                    />
                </td>
            )	
            }
        	}
        	}else
            {
                for (let d = 1; d <= moment(this.props.real_select_day).daysInMonth(); d++) { 
                    amounts=numberOfEvents[d-1];
                   let year_month=moment(this.props.real_select_day).format("YYYY-MM")+"-"+d;
                    if (moment(year_month).day()==this.state.firstweekend || moment(year_month).day()==this.state.secondweekend){
                    if (this.state.today_years==year_ && d==this.state.today_day    && this.state.today_months==month_){is_Today=true}else(is_Today=false)    
            daysInMonth.push(
                <td key={d}>
                    <Day number={moment(this.props.real_select_day).set('date',d)} amount={amounts} isWeekend={true} isToday={is_Today} onClick={ this.props.updateData} isSelect={this.props.selec_day==d}
                    real_select_day={this.props.real_select_day} real_data={this.props.real_data} weekMonth={weekMonth}
                    />
                </td>
            );}else{
                if (this.state.today_years==year_ && d==this.state.today_day && this.state.today_months==month_){is_Today=true}else(is_Today=false) 
              daysInMonth.push(
                <td key={d}>
                    <Day number={moment(this.props.real_select_day).set('date',d)} amount={amounts} isWeekend={false} isToday={is_Today} onClick={ this.props.updateData} isSelect={this.props.selec_day==d}
                    real_select_day={this.props.real_select_day} real_data={this.props.real_data} weekMonth={weekMonth}
                    />
                </td>
            )   
            }
            }
            }
if (this.state.week_month){
        if((start_week<=parseInt(end_week_year))&&(moment(this.props.real_data).format("MM")=="01")){

            blanks = [];
                for (let i = 0; i < 7-parseInt(end_week_year); i++) {
                blanks.push(<td key={i * 80} className="emptySlot">
                {""}
                </td>
            );
        }
            var totalSlots = [...blanks, ...daysInMonth];
        }
        else if (1==(moment(this.props.real_data).startOf('year')).format("d")){
                blanks = [];
        for (let i = 0; i < 7-parseInt(end_week_year); i++) {
            blanks.push(<td key={i * 80} className="emptySlot">
                {""}
                </td>
            );
        }
            var totalSlots = [ ...daysInMonth,...blanks];
        }    
    else{var totalSlots = [...daysInMonth];}}
    else{var totalSlots = [...blanks, ...daysInMonth];}
    let rows = [];
        let cells = [];
        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            } else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);
            }
        });
        let trElems = rows.map((d, i) => {
            return (
                <tr key={i*100}>
                    {d}
                </tr>
            );
        })
		return(
			<div className="">
				<div className="">
					<table className="table_body" style={{width:'440px'}}>
						<tbody>
									{trElems}
						</tbody>
					</table>
				</div>
			</div>	
		)	}	
							}
export default Tbody