import React, { Component } from 'react';
import items from './Data';
import Client from './Contentful';



const EmpContext = React.createContext();

class EmpProvider extends Component {
    state = {
        employee: [],
        sortedemployee:[],
        developer:[],
        designer:[],
        hr:[],
        admin:[],
        loading:true,
        name:"all"

    };
getData = async () =>{
try {
        let response = await Client.getEntries({
            content_type: "data",
            order:"sys.createdAt"
        });
        let employee = this.formatData(response.items);
        console.log(employee)
    
        let designer = employee.filter (employe => employe.designer === true);
        let hr = employee.filter (employe => employe.hr === true);
        let admin = employee.filter (employe => employe.admin === true);
        let developer = employee.filter (employe => employe.developer === true); 
        
        this.setState({
            employee,
            developer,
            hr,
            admin,
            designer,
            sortedemployee:employee,
            loading:false,
            
            
            

        });
}catch(error){
    console.log(error);
}

}
        
        

        
    
    componentDidMount(){
       this.getData()
    }

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);

            let employe = {...item.fields,images,id}
            return employe;

        });
        return tempItems;
    }
    getEmploye = (slug) => {
        let tempEmployee = [...this.state.employee];
        const employe = tempEmployee.find(employe => employe.slug===slug);
        return employe;
    };
    handleChange = event => {
        const target =event.target
        const name =event.target.name
        const value=event.target.value
        this.setState({
            [name]:value
        },this.filterEmployee)
        
        
        
    };
    filterEmployee = () => {
        let {
            employee,
            name,
            designer,
            developer,
            admin,
            hR,
        } = this.state

        let tempEmployee = [...employee];
      if(name !== 'all'){
          tempEmployee = tempEmployee.filter(employe => employe.name === name)
      }
        
        this.setState({
            sortedemployee:tempEmployee
        });
    };
    render() {
        return (
            <EmpContext.Provider value={{...this.state,getEmploye:this.getEmploye, handleChange:this.handleChange }}>
            {this.props.children}
            </EmpContext.Provider>
        )
    }
}

const EmpConsumer = EmpContext.Consumer;

export function withEmpConsumer(Component){
    return function ConsumerWrapper(props){
        return <EmpConsumer>
            {value => <Component {...props} context={value} />}
        </EmpConsumer>
    }
}

export { EmpProvider, EmpConsumer, EmpContext }