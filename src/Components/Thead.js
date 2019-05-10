import './index.css'
import './mystyle.css'
import './font-awesome.min.css';
import React,{Component} from 'react'
import moment from 'moment'

class Thead extends Component {
	constructor(props)	{
		super(props)
		this.state={
			Choose_menu:true,
			week_month:true	
					}
		this.change_menu=this.change_menu.bind(this)
						}
	render(){
		let months = moment.monthsShort();
		const {dateContext_head,select_week,select_month,weekMonth}=this.props;
 		this.state.week_month=weekMonth;
 		let change_month=(this.props.prev_month!=this.props.next_month);
 		const title_week=((this.state.week_month))&& (change_month? months[parseInt(moment().set('month',this.props.prev_month).format("MM"))-1]+"-"+
 		months[parseInt(moment().set('month',this.props.next_month).format("MM"))-1]+" ("+moment(this.props.real_select_day).startOf("week").format("D")+"-"+
 		moment(this.props.real_select_day).startOf("week").add(6,"day").format("D")+")":months[parseInt(moment().set('month',this.props.next_month).format("MM"))-1]+
 		" ("+moment(this.props.real_select_day).startOf("week").format("D")+"-"+moment(this.props.real_select_day).startOf("week").add(6,"day").format("D")+")");
 		const title_month=(!(this.state.week_month))&&	moment(this.props.real_select_day).format("MMMM");
 		const Choose_menu_true=this.state.Choose_menu && <i className="fa fa-fw fa-chevron-down icon" aria-hidden="true" style={{color:'#557392',cursor: 'pointer'}} onClick={this.change_menu}/>
 		const Choose_menu_false=!(this.state.Choose_menu) && <i className="fa fa-fw fa-chevron-up icon" aria-hidden="true" style={{color:'#557392',cursor: 'pointer'}}onClick={this.change_menu}/>	
 		const Choose_menu= !(this.state.Choose_menu) && <tr className="think_tr">
						<td></td>
						<td colSpan={2}><div id="radius" style={{width:'110px',cursor: 'pointer'}} onClick={select_week}>This week
						</div></td>
						<td></td>
						<td colSpan={2}><div id="radius" style={{width:'110px',cursor: 'pointer'}} onClick={select_month}>This month
						</div></td>
						<td></td>
						</tr>; 
		const Choose_menu_prev=(this.state.week_month) && <td colSpan={1} id="icon10" style={{color:'#48c1c2',cursor: 'pointer',textAlign:'center',left:"5px"}} className="px_16" 
		onClick={() => { this.props.chooseWeek(false)}}
		>Prev</td>
		const Choose_menu_next=(this.state.week_month) && <td colSpan={1} id="icon10" style={{color:'#48c1c2',cursor: 'pointer',textAlign:'center',left:"1px"}} className="px_16" 
		onClick={() => { this.props.chooseWeek(true)}}
		>{"Next"}</td>
		const Choose_menu_prev_month=!(this.state.week_month) && <td colSpan={1} id="icon10" style={{color:'#48c1c2',cursor: 'pointer',textAlign:'center',left:"5px"}} className="px_16"
		onClick={() => { this.props.chooseMonth(false)}}
		>Prev</td>
		const Choose_menu_next_month=!(this.state.week_month) && <td colSpan={1} style={{color:'#48c1c2',cursor: 'pointer',left:"1px"}} className="px_16"
		onClick={() => { this.props.chooseMonth(true)}}
		>{"Next"}</td>
		return(	
					<table className="table_my" >
						<tbody style={{textAlign:'center',width:'420px'}}>						
						<tr>
						{Choose_menu_prev_month}{Choose_menu_prev}
						<td colSpan={5} style={{textAlign:'center'}} className="bold" >
						{title_week}{title_month} {Choose_menu_true}	{Choose_menu_false}
						</td>
						{Choose_menu_next_month}{Choose_menu_next}
						</tr>	
						{Choose_menu}						
						</tbody>
						<tfoot>
						<tr className="tr_12"><td>S</td><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td></tr>
						</tfoot>
					</table>
		)			
	}	
change_menu = function change_menu() {
	this.setState({
		Choose_menu:!this.state.Choose_menu
	});
}
							}
export default Thead