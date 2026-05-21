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
      title: 'High Parameter Efficiency',
      desc:  'KANs can achieve comparable or higher accuracy than MLPs while using up to 10 times fewer parameters',
      color: '#e0f7f4'
    },
    {
      icon: '🎯',
      title: 'Superior Interpretability',
      desc:  'Traditional deep learning models are often considered "black boxes". In contrast, every edge in a KAN represents a single learnable function that can be explicitly plotted and analyzed.',
      color: '#fff3e0'
    },
    {
      icon: '🔄',
      title: 'Better Neural Scaling Laws',
      desc:  'KANs scale up more gracefully than MLPs. Rather than requiring complete retraining to increase model size',
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