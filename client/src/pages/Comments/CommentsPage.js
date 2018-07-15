import React, {Component} from "react";
import { Row, Col } from "../../components/Grid";
import Container from "../../components/Container";
import Section from "../../components/Section";

class CommentsPage extends Component {
    render() {
        return (
            <Section>
                <Container>
                    <Row>
                        <div className="row">
                            <div className="col s12">
                            <div className="card darken-1">
                            <div className="card-content black-text grey lighten-5">
                                <span className="card-title">Joana Doe</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                                nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
                                 eveniet cum cupiditate aliquam?</p>
                            </div>
                             </div>
                            </div>
                        </div>
                       { /*<!--Post Item -->*/}
                       <div className="row">
                       <div className="col s12 m12">
                         <div className="card">
                           <div className="card-content black-text grey lighten-5">
                             <span className="card-title">Join the Conversation</span>
                               <form className="container">
                                 <div className = "row">
         
                                   <div className="input-field col s12">
                                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                                        <label htmlFor="textarea1">Say Something</label>
                                   </div>
                                   <div className="input-field col s12">
                                     <button className="btn waves-effect waves-light  amber darken-4" type="submit" name="action">
                                       Submit <i className="material-icons right">send</i>
                                     </button>
                                   </div>
                                 </div>
                               </form>
                           </div>
                         </div>
                       </div>
                     </div>

                    {/*comment feed*/}
                    <Row>
                   
                        <div className="row">
                            <div className="col s12">
                                <div className="card darken-1">
                                    <div className="card-content black-text grey lighten-5">
                                        <span className="card-title">John Deer</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                                        nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
                                        eveniet cum cupiditate aliquam?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                        <div className="row">
                            <div className="col s12">
                                <div className="card darken-1">
                                    <div className="card-content black-text grey lighten-5">
                                        <span className="card-title">Julian Martinez</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                                        nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
                                        eveniet cum cupiditate aliquam?</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12">
                                <div className="card darken-1">
                                    <div className="card-content black-text grey lighten-5">
                                        <span className="card-title">Maria Lopez</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                                        nesciunt soluta suscipit nobis. Amet accusamus distinctio cupiditate blanditiis dolor? Illo perferendis
                                        eveniet cum cupiditate aliquam?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
          
                    </Row>
                    </Row>
                </Container>
            </Section>

        )
    }
}

export default CommentsPage;