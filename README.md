
<a href="" target="_blank" rel="noopener">
  <picture>
    <source media="(prefers-color-scheme: dark)" alt="CON-KAN" srcset="https://github.com/Abhiraj-Sardar/CON-KAN/blob/master/Resources/Logo-Banner.png" />
    <img alt="CON-KAN" src="https://github.com/Abhiraj-Sardar/CON-KAN/blob/master/Resources/Logo-Banner.png" />
  </picture>
</a>


<h4 align="center">
  <a href="https://excalidraw.com">CON-KAN</a> |
  <a href="https://docs.excalidraw.com">Know CNN</a> |
  <a href="https://plus.excalidraw.com/blog">Know KAN</a> |
  <a href="https://plus.excalidraw.com">Visit Site</a>
</h4>

<div align="center">
  <h2>
    An open source Cat and Dog Classification Model </br>
    Trained with CNN + KAN </br>
  <br />
  </h2>
</div>

<br />
<p align="center">
  <a href="">
    <img alt="DataSet" src="https://img.shields.io/badge/Dataset-10,000-green" /></a>
  <a href="">
    <img alt="Accuracy" src="https://img.shields.io/badge/Accuracy-95%25-orange" /></a>
    <a href="">
    <img alt="Roc-Auc" src="https://img.shields.io/badge/ROC_AUC-0.8-green" /></a>
  <a href="https://github.com/Abhiraj-Sardar/CON-KAN/blob/master/LICENSE">
    <img alt="CON-KAN is released under the MIT license." src="https://img.shields.io/badge/license-MIT-blue.svg"  /></a>
  <!-- <a href="https://www.npmjs.com/package/@excalidraw/excalidraw">
    <img alt="npm downloads/month" src="https://img.shields.io/npm/dm/@excalidraw/excalidraw"  /></a> -->
  <a href="https://github.com/Abhiraj-Sardar/CON-KAN/pulls">
    <img alt="PRs welcome!" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat"  /></a>
  <a href="site-url">
    <img alt="Con-KAN" src="https://img.shields.io/badge/Visit-Conkan-yellow"/></a>
  <a href="https://github.com/Abhiraj-Sardar/CON-KAN/issues">
    <img alt="Raise Issue" src="https://img.shields.io/badge/Raise-Issue-red?logo=github" /></a>
  <a href="https://github.com/Abhiraj-Sardar">
    <img alt="Follow Follow Abhiraj Sardar on Github" src="https://img.shields.io/twitter/follow/excalidraw.svg?label=follow+@Abhiraj-Sardar&style=social&logo=twitter"/></a>
    
</p>


<div align="center">
  <figure>
    <a href="https://conkan.netlify.app/" target="_blank" rel="noopener">
      <img src="https://github.com/Abhiraj-Sardar/CON-KAN/blob/master/Resources/landingpage-light.png" alt="Product showcase" />
    </a>
    <figcaption>
      <p align="center">
        Identify Cat and Dog by simple drag & drop image
      </p>
    </figcaption>
  </figure>
</div>


## Features

- 💯&nbsp;Free & open-source.
- 🌓&nbsp;Support Dark Mode.
- 😺&nbsp;Identify Cat and Dog
- 📷&nbsp;Image support.
- ↖️&nbsp;Drag and Drop Images
- 🪶&nbsp;Minimalist UI.
- 📁&nbsp;Support png, jpg and webp file format.

## Quick Start
**Note:** following instructions are for installing the CON-KAN in your local system.

first clone the repository to local system

```bash
    git clone https://github.com/Abhiraj-Sardar/CON-KAN.git
```
```bash
   cd CON-KAN
```





- 🌐 Frontend

  ```bash
    cd Frontend
    cd model-frontend
  ```
  initialize with npm 
  ```bash
  npm i
  ```
  then run, with--
  ```bash
   ng serve
  ```

- 🖲️ Backend



## System Architecture

<div align="center">
  <figure>
      <img src="https://github.com/Abhiraj-Sardar/CON-KAN/blob/master/Resources/applicationarchitecture.png" alt="Product showcase" />
    <figcaption>
      <p align="center">
        System Architecture
      </p>
    </figcaption>
  </figure>
</div>

The proposed system follows a client-server architecture designed for real-time cat and dog image classification using the CON-KAN deep learning model. The system mainly consists of three components: the user device, the frontend server, and the backend server integrated with the trained CON-KAN model. The frontend application, developed using Angular and Vanilla CSS, provides a simple and interactive interface that allows users to upload images through a web browser. The backend is implemented using FastAPI, which manages API requests, image preprocessing, and model inference operations.
When a user uploads an image through the frontend interface, the image is sent to the backend server using an HTTP POST request through the prediction API endpoint. The backend first preprocesses the uploaded image and then passes it to the trained CON-KAN model for classification. Based on the learned image features, the model predicts whether the uploaded image belongs to the cat or dog category. The prediction result is then returned to the user through an HTTP response and displayed on the frontend interface in real time. The frontend application is deployed on Netlify, while the FastAPI backend, along with the trained PyTorch model, is deployed on Render.com, enabling lightweight CPU-based inference and scalable real-time prediction.


## Model Architecture

<div align="center">
  <figure>
    <a href="https://excalidraw.com" target="_blank" rel="noopener">
      <img src="https://github.com/Abhiraj-Sardar/CON-KAN/blob/master/Resources/modelarchitecture.png" alt="Product showcase" />
    </a>
    <figcaption>
      <p align="center">
        CON-KAN Model Architecture
      </p>
    </figcaption>
  </figure>
</div>

The proposed CON-KAN architecture is a hybrid deep learning model developed by combining the spatial feature extraction capability of convolutional neural networks (CNNs) with the adaptive functional learning behavior of Kolmogorov-Arnold networks (KANs). The architecture was designed as an experimental alternative to conventional CNN-based image classification systems that mainly depend on fully connected dense layers for final prediction. Instead of using a traditional Multi-Layer Perceptron (MLP) classifier, the proposed model integrates a custom KAN-based classification module to study whether adaptive functional mappings can effectively handle image classification tasks.
The overall architecture follows a layered deep learning pipeline consisting of:
- convolutional feature extraction,
- feature normalization,
- dimensional transformation,
- and KAN-based classification.<br/>

The system was specifically designed to maintain a balance between research experimentation and practical deployment feasibility in a resource-constrained environment.





## Model Parameters 

<div align="center">
  <table>
  <caption>Train & Test Parameters</caption>
        <thead>
          <th>Parameter</th>
          <th>Value</th>
        </thead>
        <tbody>
          <tr>
          <td>Epoch</td>
          <td>30</td>
          </tr>
          <tr>
          <td>Learning Rate</td>
          <td>0.001</td>
          </tr>
          <tr>
          <td>Train size</td>
          <td>80%</td>
          </tr>
          <tr>
          <td>Test size</td>
          <td>20%</td>
          </tr>
          <tr>
          <td>Optimizer</td>
          <td>Adam</td>
          </tr>
          <tr>
          <td>Loss Function</td>
          <td>BCELogitLoss</td>
          </tr>
        </tbody>
  </table>
</div>



## Why Those Parameters ?



## Loss Curve



## Suggested Readings 

- 📃[KAN-Kolmogorov Arnold Networks]()
- 📃[CNN-Convolutional Neural Network]()
