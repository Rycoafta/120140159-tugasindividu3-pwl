import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Data yang dikirim:', this.state);
    };

    render() {
        return (
            <div className="container">
                <div className="">
                    <h1>Kontak</h1>
                        <h7>Telp/Wa: 085379796512</h7>
                        <p>Email  : rikolampung9@gmail.com</p>
                        <h2 className="text-center">KIRIM PESAN</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="my-4 form-group">
                                <label>Nama:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="my-4 form-group">
                                <label>Pesan:</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <button variant="Dark" type="submit" className="introButton mb-4 text-center">Kirim Pesan</button>
                        </form>
                </div>
            </div>
        );
    }
}

export default App;