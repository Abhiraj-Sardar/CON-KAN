import { Component } from '@angular/core';

@Component({
  selector: 'app-know-kan',
  templateUrl: './know-kan.component.html',
  styleUrls: ['./know-kan.component.css']
})
export class KnowKanComponent {

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
  
  facts = [
    { icon: '📅', label: 'Introduced',  value: '2024 — Liu et al., MIT'         },
    { icon: '🧮', label: 'Theorem',     value: 'Kolmogorov–Arnold (1957)'        },
    { icon: '🔗', label: 'Activations', value: 'Learnable splines on edges'      },
    { icon: '📉', label: 'Parameters',  value: 'Fewer than MLP for same accuracy'},
    { icon: '🎯', label: 'Strength',    value: 'Symbolic regression & science'   }
  ];

  
}