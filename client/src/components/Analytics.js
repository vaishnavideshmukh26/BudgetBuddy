import React from 'react'
import { Progress } from 'antd'
const Analytics = ({ allTransection }) => {
  //category
  const categories =[
    "salary",
    "tip",
    "project",
    "food",
    "movie",
    "bills",
    "medical",
    "fee",
    "tax",
  ];

  //totaltransection
  const totalTransaction = allTransection.length;
  const totalincomeTransection = allTransection.filter(transaction => transaction.type === 'income');
  const totalexpenseTransection = allTransection.filter(transaction => transaction.type === 'expense');
  const totalincomepercent = (totalincomeTransection.length / totalTransaction) * 100;
  const totalexpensePercent = (totalexpenseTransection.length / totalTransaction) * 100;

  //totalturnover
  const totalTurnover =allTransection.reduce(
    (acc, transaction)=> acc+transaction.amount,0
  );

  const totalIncomeTurnover=allTransection.filter((transaction)=> transaction.type === 'income')
  .reduce((acc,transaction)=>acc +transaction.amount,0);

  const totalExpenseTurnover=allTransection.filter((transaction)=> transaction.type === 'expense')
  .reduce((acc,transaction)=>acc +transaction.amount,0);

  const totalexpenseTurnOverPercent = (totalExpenseTurnover/totalTurnover) *100;
  const totalIncomeTurnoverPercent= (totalIncomeTurnover/totalTurnover)*100;

  return (
    <>
      <div className='row md-2 mx-2 my-4'>
        <div className='col-md-3'>
          <div className='card'>
            <div className='card-header'>
              Total Transaction :{totalTransaction}
            </div>
            <div className='card-body'>
              <h5 className='text-success'>Income: {totalincomeTransection.length} </h5>
              <h5 className='text-danger'>Expense : {totalexpenseTransection.length} </h5>
              <div>
                <Progress type='circle' strokeColor={'green'} className='mx-2' percent={totalincomepercent.toFixed(0)} />
                <Progress type='circle' strokeColor={'red'} className='mx-2' percent={totalexpensePercent.toFixed(0)} />

              </div>
            </div>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='card'>
            <div className='card-header'>
              Total Turnover :{totalTurnover}
            </div>
            <div className='card-body'>
              <h5 className='text-success'>Income: {totalIncomeTurnover.length} </h5>
              <h5 className='text-danger'>Expense : {totalExpenseTurnover.length} </h5>
              <div>
                <Progress type='circle' strokeColor={'green'} className='mx-2' percent={totalIncomeTurnoverPercent.toFixed(0)} />
                <Progress type='circle' strokeColor={'red'} className='mx-2' percent={totalexpenseTurnOverPercent.toFixed(0)} />

              </div>
            </div>
          </div>
        </div>
      
      {/* < className='row mt-3'> */}
        <div className='col-md-3'>
          <h4>Categorywise Income</h4>
          {categories.map((category)=>{
            const amount =allTransection.filter((transaction)=>
            transaction.type === 'income' &&
            transaction.category===category)
            .reduce((acc,transaction) => acc+ transaction.amount,0);
            return(
              amount >0 &&(
             <div className='card'>
              <div className='card-body'>
                <h5>{category}</h5>
                <Progress percent={((amount/totalIncomeTurnover)*100).toFixed(0)}/>
                </div>
                </div>
              )
            );
          })
          }
        </div>
        <div className='col-md-3'>
          <h4>Categorywise Expense</h4>
          {categories.map((category)=>{
            const amount =allTransection.filter((transaction)=>
            transaction.type === 'expense' &&
            transaction.category===category)
            .reduce((acc,transaction) => acc+ transaction.amount,0);
            return(
              amount >0 &&(
             <div className='card'>
              <div className='card-body'>
                <h5>{category}</h5>
                <Progress percent={((amount/totalExpenseTurnover)*100).toFixed(0)}/>
                </div>
                </div>
              )
            );
          })

          }
        </div>
        </div>
    </>
  )
}

export default Analytics
