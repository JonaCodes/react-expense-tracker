const ExpenseInput = React.createClass({
	render:function(){
		return (
			<div>
				<input id="amt" 	type="number" placeholder="$"/>
				<input id="cat" 	type="text" placeholder="Category"/>
				<input id="descr" type="text" placeholder="Description"/>
				<button onClick={() => this.props.addExpense()}>Add Expense</button>
			</div>
		)
	}
})

const ExpenseFilters = React.createClass({
	render:function(){
		return (
			<div>
				<hr/>
				<input id="catFilter" type="text" placeholder="Category"/>
				<button onClick={() => this.props.changeFilter()}>Filter by Category</button>
				<br/><br/>
			</div>
		)
	}
})

const Expense = React.createClass({
	render:function(){
		return(
			<div>${this.props.amt}, {this.props.cat}, {this.props.descr}</div>
		)
	}
})

const ExpenseDisplay = React.createClass({

	getExpenses:function(){
		const expenses = []
		let i = 0

		for(let expense of this.props.expenses){
			let {amt, cat, descr} = expense
			if(this.props.filter){
				if(this.props.filter == cat){
					expenses.push(<Expense key={i++} amt={amt} cat={cat} descr={descr}/>)
				}
			}
			else{
					expenses.push(<Expense key={i++} amt={amt} cat={cat} descr={descr}/>)
			}
		}

		return expenses //accepts a single HTML element or an array of them
	},

	render:function(){
		return(
			<div>
				{this.getExpenses()}
			</div>
		)
	}
})

const FinanceTracker = React.createClass({
	
	getInitialState:function(){
		return{
			expenses: [],
			catFilter: null
		}
	},

	addExpense:function(){
		const amount = document.getElementById("amt").value
		const category = document.getElementById("cat").value
		const description = document.getElementById("descr").value
		
		this.setState({expenses: this.state.expenses.concat({amt:amount, cat:category, descr:description})})
	},

	changeFilter:function(){
		this.setState({catFilter:document.getElementById("catFilter").value})
	},

	render: function(){
		return (
			<div>
				<ExpenseInput addExpense={this.addExpense}/>
				<ExpenseFilters changeFilter = {this.changeFilter}/>
				<ExpenseDisplay expenses={this.state.expenses} filter={this.state.catFilter}/>				
			</div>
		)
	}
})

ReactDOM.render(
	<FinanceTracker/>,
  document.getElementById('container')
);

