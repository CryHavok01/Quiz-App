'use strict';

class Ulic extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.reset();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h2>You're Ulic Qel-Droma!</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <img src="pics/Ulic.jpg" className="img-fluid" alt="Ulic Qel Droma" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>
                            Ulic Qel-Droma was a human Jedi Knight who lived and died around 4000 years before Luke Skywalker was born.  Qel-Droma was an innocent and idiolistic human growing up on Alderaan and when he came of age, he and his brother Cay followed in their mother's footsteps by joining the Jedi Order.  Ulic quickly distinguished himself with his skills and strength in the force, and became a respected Jedi Knight.  During his service to the Jedi Order, Ulic fell in love with fellow Knight, Nomi Sunrider.  As his talents grew, he developed a reputation for his confidence, bordering on headstrong recklessness.  His ego would become his downfall, as he took greater and greater risks for the Jedi Order.  With the best of intentions, Ulic repeatedly advocated for a dangerous undercover mission to infiltrate and destabilize a Dark Side cult called the Krath.  After being rejected by the Jedi Council, Ulic went rogue and undertook the mission on his own, but was swiftly captured.  After being tortured by the Krath for months, Ulic escaped and killed his captors. Filled with pain and rage, he murdered the leader of the Krath.  Falling to the Dark Side, he assumed command of the Krath and became the apprentice of the Sith Lord Exar Kun.  Together, they waged war on the Republic and the Jedi.  After a bloody campaign, Ulic led an assault on the Jedi Temple on the planet Ossus, where he was confronted by several Jedi Knights.  During the battle, Ulic fought and killed his brother Cay.  This act of fratricide finally broke through the Dark Side's hold over Ulic, and he became frozen with regret and revulsion.  In this moment of hesitation, Ulic's former lover Nomi Sunrider used her abilities to sever Ulic's connection to the force.  Useless to the Sith and a pariah to the Jedi, Ulic escaped into obscurity and lived out his days in shame and exile.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-warning btn-block" onClick={this.handleClick}>
                            Start Over
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}