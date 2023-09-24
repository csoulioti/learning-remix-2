// /expenses/analysis

const DUMMY = [{
  id: 'e1',
  title: 'First Expense', 
  amount: 12.99,
  date: new Date().toISOString()
},
{
  id: 'e2',
  title: 'Second Expense', 
  amount: 16.99,
  date: new Date().toISOString()
}]
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";

export default function ExpensesAnalysisPage() {
  return <main>
    <Chart expenses={DUMMY}/>
    <ExpenseStatistics expenses={DUMMY}/>
  </main>
}
