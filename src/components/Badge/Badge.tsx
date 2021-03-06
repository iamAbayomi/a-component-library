import  React from 'react'
import styled from 'styled-components'
type MyProps ={
    text: string,
    backgroundColor?: string
}

let backgroundColor = 'green'


export default class Badge extends React.Component<MyProps>{
    
    state = {
       statusText: this.props.text,
       backgroundColor: this.props.backgroundColor
    }

    componentDidMount(){
        if(this.props.text){
            switch(this.props.text.toLowerCase()){
                case "active":
                    this.setState({backgroundColor : 'rgb(92 220 92)'  })
                    break;
                case "block":
                    this.setState({  backgroundColor : 'red' })
                    break;
                case "successful":
                    this.setState({backgroundColor : '#27c327' })
                    break;
                case "cancelled":
                    this.setState({  backgroundColor : 'red' })
                    break;
                case "pending":
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                case "processing":
                    this.setState({ backgroundColor :"rgba(130, 130, 130, 1)" })
                    break;
                case "decline":
                    this.setState({backgroundColor: 'red'})
                    break;
                case "completed":
                    this.setState({backgroundColor : '#27c327' })
                    break;
                case "failed":
                    this.setState({backgroundColor : 'red' })
                    break;
                case "in progress":
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                case "false":
                    this.setState({ text : "Active" })
                    this.setState({ backgroundColor : "rgba(93, 248, 136, 1)" })
                    break;
                case "true":
                    this.setState({ text : "Inactive" })
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                    default:
                        this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" });
                        break
                    
            }
            console.log('This is the props', this.props.text)
            console.log('This is the props', this.props.backgroundColor, 'This is the state',  this.state.backgroundColor)
        }
    }

    componentDidUpdate(prevProps:any) {
        if(prevProps.text !== this.props.text){
            console.log("CHIP STATUS HAS CHANGED")
            this.onChangeBackgroundColor()
        }
    }
              
    onChangeBackgroundColor = () => {

            switch(this.props.text.toLowerCase()){
                case "active":
                    this.setState({backgroundColor : 'rgb(92 220 92)' })
                    break;
                case "block":
                    this.setState({  backgroundColor : 'red' })
                    break;
                case "successful":
                    this.setState({backgroundColor : '#27c327',text:"successful"  })
                    break;
                case "cancelled":
                    this.setState({  backgroundColor : 'red',text:"cancelled" })
                    break;
                case "pending":
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                case "processing":
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)", text:"processing" })
                    break;
                case "decline":
                    this.setState({backgroundColor: 'red'})
                    break;
                case "completed":
                    this.setState({backgroundColor : '#27c327' })
                    break;
                case "failed":
                    this.setState({backgroundColor : 'red' })
                    break;
                case "in progress":
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                case "false":
                    this.setState({ text : "Active" })
                    this.setState({ backgroundColor : "rgba(93, 248, 136, 1)" })
                    break;
                case "true":
                    this.setState({ text : "Inactive" })
                    this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" })
                    break;
                    default:
                        this.setState({ backgroundColor : "rgba(130, 130, 130, 1)" });
                        break
                    
            }
        
    }

    render(){
        return(
            <div>
                <BadgeCard className="" style={{ backgroundColor: `${this.state.backgroundColor}` }}>
                    <Text>{this.props.text}</Text>
                </BadgeCard>
            </div>
        )
    }
}



const BadgeCard = styled.div `
    box-sizing: border-box;
    color: white;
    width: 100%;
    max-width: max-content;
    border-radius: 20px;
`

const Text = styled.p`
    padding: 2px 10px;
    margin: 0px;
    font-size: 12px;
    font-weight: 550;
`