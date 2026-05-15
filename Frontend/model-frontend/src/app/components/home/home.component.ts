import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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

  steps = [
    { num: '1', title: 'Clone the Repository',   cmd: 'git clone https://github.com/your-repo.git' },
    { num: '2', title: 'Install Python Packages', cmd: 'pip install -r requirements.txt'            },
    { num: '3', title: 'Start the API Server',    cmd: 'uvicorn main:app --reload --port 8000'      },
    { num: '4', title: 'Launch Angular Frontend', cmd: 'ng serve --open'                            }
  ];
}