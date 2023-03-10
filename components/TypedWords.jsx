import React from "react"

function delay(time,callback){ // use setTimeout synchonously
    return new Promise((resolve)=>{setTimeout(()=>{callback();resolve(null)},time)})
}
class TypedWords extends React.Component{
    constructor(props){
        super(props)
        this.state={
            output: "Vinicius El Khalili",
            current:"Vinicius El Khalili",
            running:false
        }
        this.cycle=this.cycle.bind(this)
    }
    async write(wrd_i){
        await this.unwrite()
        this.setState({current:this.props.texts[wrd_i]})
        console.log(this.props.texts[wrd_i])
        let output=""
        for (let j=0;j<this.state.current.length;j++){
            await delay(350/this.state.current.length,()=>{
                output+=this.state.current[j]
                this.setState({output:output})
            })
        }
    }
    async unwrite(){
        let output=this.state.current
        this.setState({output:output})
        for (let i=this.state.current.length;i>=0;i--){
            await delay(350/this.state.current.length,()=>{
                output=this.state.current.slice(0,i)
                this.setState({output:output})
            })
        }
    }
    async cycle(){
        if (this.state.running){console.log("nope");return null}
        this.setState({running:true})
        let i=0
        while (true){
            await this.write(i)
            await delay(500,()=>{})
            await this.unwrite()
            i++
            if(i>=this.props.texts.length){
                i=0
            }
        }
    }
    componentDidMount(){
        let a   
        //this.cycle()
    }
    render(){
        return(
            <div>{this.state.output}_</div>
        )
    }
}

export default TypedWords
