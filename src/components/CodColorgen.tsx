
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from 'react';

class CodColorgen extends Component {

    render() {
        return (

            <div className="container animate__animated animate__fadeIn">
                <div className="row">
                    <div className="col-sm-12 text-center mt-4">
                        <h5>Call of Duty 4 - Modern Warfare RGB Color Generator</h5>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="gen-card">
                            <div className="card-body">
                                <div className="row px-3">
                                    <div className="col-6 p-2 mb-4 text-center" style={{
                                        backgroundColor: 'black',
                                        border: '1px solid #ffffff',
                                        textAlign: 'center'
                                    }}>
                                        <h1 id="t1">COLOR</h1>
                                    </div>
                                    <div className="col-6 p-2 mb-4 text-center" style={{
                                        backgroundColor: '#ffffff',
                                        border: '1px solid #ffffff',
                                        textAlign: 'center'
                                    }}>
                                        <h1 id="t2">COLOR</h1>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button data-jscolor="{value:'#3FB764'}" style={{width:"100%", height:90, marginTop:10}} id="color_input">
                                    </button>
                                </div>

                                <div className="mb-3 text-center">
                                    <h5 className="text-muted my-4">For GSC/GSX Scripts</h5>
                                    < hr />

                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="ipt form-control" id="in1" aria-describedby="cp1" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-success"
                                            data-clipboard-target="#in1"
                                            id="cp1">
                                            Copy
                                        </button>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="ipt form-control" id="in2" aria-describedby="cp2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-success"
                                            data-clipboard-target="#in2"
                                            id="cp2">
                                            Copy
                                        </button>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="ipt form-control" id="in3" aria-describedby="cp3" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-success"
                                            data-clipboard-action="copy"
                                            data-clipboard-target="#in3"
                                            id="cp3">
                                            Copy
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-3 text-center">
                                    <h5 className="text-muted my-4">For Menu Scripts or Config</h5>
                                    <hr />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="ipt form-control" id="in4" aria-describedby="cp4" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-success"
                                            data-clipboard-target="#in4"
                                            id="cp4">
                                            Copy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row footer fixed-bottom">
                    <div className="col-md-12 text-center">
                        <h6 className="text-muted my-4">Developed by <a href="https://tharindujayakody.me">TharinduJ</a></h6>
                    </div>
                </div>
            </div>
        );
    };
}

export default CodColorgen;
