import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {
  getGuestToken,
  login,
  verifyToken,
  killToken,
  postWithSavedToken,
  Methods,
  fileUpload,
  getWithSavedToken
} from '@genetous/react/dist/components/genetousAPI'
const resultStyle = {
  width: "400px",
  wordWrap: "break-word",
  display: "inline-block"

}
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultWrite: "",
      selectedFile: null,
      percent: 0,
    }
    this.handlePercent = this.handlePercent.bind(this);
  }
  handlePercent(data) {
    this.setState({ percent: data })
  }
  async getGuestToken() {
    var res = "";
    await getGuestToken().then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async login() {
    var model = {
      where: {
        and: {
          username: "genetousUser",
          userpass: "12345678"
        }
      }
    }
    var res = "";
    await login(model, 0).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async verifyToken() {
    var res = "";
    await verifyToken().then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async killToken() {
    var res = "";
    await killToken().then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async addCollection() {
    var model = {
      collectionName: "product",
      content: {
        createdDate: 1686635382707,
        productName: "X Shoes",
        productBrand: "Y Brand",
        productPrice: "100",
        productCurrency: "$",
        productColorCodes: ["#FFFFFF", "#800000", "#008000"],
        productImages: ["image1_url", "image2_url", "image3_url"],
        isActive: true
      }
    }
    var res = "";
    await postWithSavedToken(model, Methods.AddCollection).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async addUniqueCollection() {
    var model = {
      collectionName: "product",
      content: {
        createdDate: 1686635382707,
        productName: "X Shoes",
        productBrand: "Y Brand",
        productPrice: "100",
        productCurrency: "$",
        productColorCodes: ["#FFFFFF", "#800000", "#008000"],
        productImages: ["image1_url", "image2_url", "image3_url"],
        isActive: true,
        uniqueFields: ["productName"]
      }
    }
    var res = "";
    await postWithSavedToken(model, Methods.AddUniqueCollection).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async addRelation() {
    var model = {
      relations: [
        {
          id: "64ddb1b7c84e623c3deb5fe0",
          relationName: "testRelation"
        }
      ],
      contents: [
        {
          id: "64ddb1c3c84e623c3deb5fe3"
        }
      ]
    }
    var res = "";
    await postWithSavedToken(model, Methods.AddRelation).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async getRelations() {
    var model = {
      where: {
        and: {
          relationName: "testRelation"
        }
      },
      related: {
        collectionName: "test2",
        from: 0,
        size: 5,
        sort: {
          data1: "desc"
        }
      },
      from: 0,
      size: 1,
      sort: {
        data2: "asc"
      }
    }
    var res = "";
    await postWithSavedToken(model, Methods.GetRelations).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async getCollections() {
    var model = {
      where: {
        and: {
          productName: "X Shoes"
        }
      }
    }
    var res = "";
    await postWithSavedToken(model, Methods.GetCollections).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async updateCollections() {
    var model = {
      where: {
        and: {
          productName: "X Shoes"
        }
      },
      fields: [
        {
          field: "productBrand",
          value: "YY Brand"
        }
      ]
    }
    var res = "";
    await postWithSavedToken(model, Methods.UpdateCollection).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async deleteCollections() {
    var model = {
      where: {
        and: {
          productName: "X Shoes"
        }
      }
    }
    var res = "";
    await postWithSavedToken(model, Methods.DeleteCollection).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async isUnique() {
    var model = {
      where: {
        and: {
          collectionName: "product",
          productName: "Y Shoes"
        }
      }
    }
    var res = "";
    await postWithSavedToken(model, Methods.IsUnique).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async createSecureLink() {
    var model = {
      collectionName: "user",
      usermail: "genetous@genetous.com",
      update: "userpass"
    }
    var res = "";
    await postWithSavedToken(model, Methods.CreateSecureLink).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  onFileChange(event) {
    var f = event.target.files[0];
    this.setState({ selectedFile: f })

  };
  async onFileUpload() {
    if(this.state.selectedFile==null){
      alert("Select a file before upload!");
      return;
    }
    var res = "";
    await fileUpload(this.state.selectedFile, Methods.FileUpload, this.handlePercent, true).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  };
  async getFileList() {
    var res = "";
    await getWithSavedToken(Methods.GetFileList).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  async deleteFiles() {
    var model = {
      files: [
        "0n0a7lpq5ck2jqe3.txt"
      ]
    }
    var res = "";
    await postWithSavedToken(model, Methods.DeleteFiles).then(function (result) {
      res = JSON.stringify(result);
    }, err => {
      res = JSON.stringify(err);
    });
    this.setState({ resultWrite: res });
  }
  render() {
    return (
      <div className="App container">
        <div className='row justify-content-center mt-4'>
          <div className='col-lg-4'>
            <h2>Methods</h2>
            <div class="btn-group-vertical">
              <button type="button" class="btn btn-secondary" onClick={this.getGuestToken.bind(this)}>Get Guest Token</button>
              <button type="button" class="btn btn-secondary" onClick={this.login.bind(this)}>Login</button>
              <button type="button" class="btn btn-secondary" onClick={this.verifyToken.bind(this)}>Verify Token</button>
              <button type="button" class="btn btn-secondary" onClick={this.killToken.bind(this)}>Kill Token</button>
              <button type="button" class="btn btn-secondary" onClick={this.addCollection.bind(this)}>Add Collection</button>
              <button type="button" class="btn btn-secondary" onClick={this.addUniqueCollection.bind(this)}>Add Unique Collection</button>
              <button type="button" class="btn btn-secondary" onClick={this.addRelation.bind(this)}>Add Relation</button>
              <button type="button" class="btn btn-secondary" onClick={this.getRelations.bind(this)}>Get Relations</button>
              <button type="button" class="btn btn-secondary" onClick={this.getCollections.bind(this)}>Get Collections</button>
              <button type="button" class="btn btn-secondary" onClick={this.updateCollections.bind(this)}>Update Collection</button>
              <button type="button" class="btn btn-secondary" onClick={this.deleteCollections.bind(this)}>Delete Collection</button>
              <button type="button" class="btn btn-secondary" onClick={this.isUnique.bind(this)}>Is Unique</button>
              <button type="button" class="btn btn-secondary" onClick={this.createSecureLink.bind(this)}>Create Secure Link</button>
              <div>
                <input class="form-control" id="file" type="file" onChange={this.onFileChange.bind(this)} />
               
                <div >
                  <progress id="file" value={this.state.percent} max="100"> {this.state.percent} % </progress>
                </div>
              </div>
              <button class="btn btn-secondary" onClick={this.onFileUpload.bind(this)}>
                  Upload File
                </button>
              <button type="button" class="btn btn-secondary" onClick={this.getFileList.bind(this)}>Get File List</button>
              <button type="button" class="btn btn-secondary" onClick={this.deleteFiles.bind(this)}>Delete Files</button>
            </div>
          </div>
          <div className='col-lg-4'>
            <h2>Result</h2>
            <div style={resultStyle}>{this.state.resultWrite}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
