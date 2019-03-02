import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'
import React from 'react'
import ExpenseDashboardPage from '../DashboardExpense'
import EditPage from '../EditExpense'
import HelpPage from '../HelpExpense'
import NotFoundPage from '../ErrorExpense'
import CreateExpensePage from '../CreateExpense'
import Header from '../HeaderExpense'

    const AppRouter = () => (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/"  component={ExpenseDashboardPage} exact={true}/>
                    <Route path="/edit/:id" component={EditPage}/>
                    <Route path="/help" component={HelpPage}/>
                    <Route path="/create" component={CreateExpensePage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        
        </BrowserRouter>
    )

    export default AppRouter