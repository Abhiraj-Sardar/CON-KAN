
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
    <a href="https://excalidraw.com" target="_blank" rel="noopener">
      <img src="https://excalidraw.nyc3.cdn.digitaloceanspaces.com/github%2Fproduct_showcase.png" alt="Product showcase" />
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



## Application Architecture

## Model Architecture

<div align="center">
  <figure>
    <a href="https://excalidraw.com" target="_blank" rel="noopener">
      <img src="https://github.com/Abhiraj-Sardar/CON-KAN/blob/master/Resources/CNN_Cat_Dog_updated.png" alt="Product showcase" />
    </a>
    <figcaption>
      <p align="center">
        CON-KAN Model Architecture
      </p>
    </figcaption>
  </figure>
</div>

The Complete Architecture works in two layers. firstly the Convolutional Layer, which takes an input image(cat or dog). internally resizing it into 150x150 dimension. as it is a color image so the channels will be 3. hence the complete dimenion of the input image is (3,150,150). after resizing the image goes through the ConV Layer 1 where the input image matrix is bitwise multiplied with the kernel, resulting some feature maps (matrix). after that we perform max pooling, the resultant feature map is again transferred to ConV Layer 2 where the same process continues and at the end we get feature maps whose number and dimensions are different as compared to Conv Layer 1.
Secondly, those feature maps are flattened into one dimensional array or Vector and then feeded into our KAN Layer which uses Spline Activation Function at its edges helps the model to identify pattern from the data and giving as the output if it is dog or cat.




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
