import { Component } from '@angular/core';

@Component({
  selector: 'app-about-cnn',
  templateUrl: './about-cnn.component.html',
  styleUrls: ['./about-cnn.component.css']
})
export class AboutCnnComponent {

  facts = [
    { icon: '📅', label: 'Popularised',  value: 'LeNet-5 — LeCun, 1998'           },
    { icon: '🏆', label: 'Breakthrough', value: 'AlexNet — ImageNet 2012'          },
    { icon: '🔗', label: 'Core Op',      value: 'Discrete 2-D Convolution'         },
    { icon: '⚡', label: 'Hardware',     value: 'GPU-optimised via cuDNN'           },
  ];
  
  advantages = [
    {
      icon: '🔍',
      title: 'KAN Interpretability',
      desc:  'Learnable spline activations make decisions transparent and human-readable.',
      color: '#f3e8ff'
    },
    {
      icon: '📐',
      title: 'CNN Spatial Mastery',
      desc:  'Convolution layers capture local patterns and spatial hierarchies efficiently.',
      color: '#e0f7f4'
    },
    {
      icon: '🎯',
      title: 'High Accuracy',
      desc:  'Both architectures deliver strong classification on real-world image datasets.',
      color: '#fff3e0'
    },
    {
      icon: '🔄',
      title: 'Transfer Learning',
      desc:  'Leverage pre-trained CNN weights for rapid fine-tuning with minimal data.',
      color: '#e8f5e9'
    },
  ];

  layers = [
    {
      name:  'Convolutional Layer',
      icon:  '🔲',
      color: '#f3e8ff',
      desc:  'Slides learnable filter banks across input feature maps, producing activation maps that capture local spatial patterns such as edges and textures.'
    },
    {
      name:  'Activation (ReLU)',
            icon:  '⚡',
      color: '#e0f7f4',
      desc:  'Rectified Linear Unit introduces non-linearity by zeroing negative values, enabling deep networks to learn complex decision boundaries efficiently.'
    },
    {
      name:  'Pooling Layer',
      icon:  '🗜️',
      color: '#fff3e0',
      desc:  'Downsamples feature maps via max or average operations, reducing spatial dimensions, controlling overfitting, and building translation invariance.'
    },
    {
      name:  'Batch Normalisation',
      icon:  '📊',
      color: '#e8f5e9',
      desc:  'Normalises layer inputs across the mini-batch, stabilising and accelerating training while acting as a mild regulariser.'
    },
    {
      name:  'Fully Connected Layer',
      icon:  '🔗',
      color: '#fce4ec',
      desc:  'Flattens spatial feature maps into a vector and performs high-level reasoning, mapping learned representations to final class scores.'
    },
    {
      name:  'Softmax Output',
      icon:  '🎯',
      color: '#e3f2fd',
      desc:  'Converts raw class logits into a probability distribution, allowing the network to express confidence across all target categories.'
    }
  ];

  architectures = [
    { name: 'LeNet-5',    year: '1998', params: '~60 K',   top5: 'N/A',    note: 'Pioneering digit recognition' },
    { name: 'AlexNet',    year: '2012', params: '~61 M',   top5: '15.3 %', note: 'ImageNet breakthrough'        },
    { name: 'VGG-16',     year: '2014', params: '~138 M',  top5: '7.3 %',  note: 'Deep uniform 3×3 convs'      },
    { name: 'ResNet-50',  year: '2015', params: '~25 M',   top5: '5.25 %', note: 'Residual skip connections'   },
    { name: 'EfficientB0',year: '2019', params: '~5.3 M',  top5: '2.9 %',  note: 'Compound scaling'            }
  ];
}