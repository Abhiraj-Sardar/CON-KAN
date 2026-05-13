import { Component } from '@angular/core';

@Component({
  selector: 'app-know-kan',
  templateUrl: './know-kan.component.html',
  styleUrls: ['./know-kan.component.css']
})
export class KnowKanComponent {

  facts = [
    { icon: '📅', label: 'Introduced',  value: '2024 — Liu et al., MIT'         },
    { icon: '🧮', label: 'Theorem',     value: 'Kolmogorov–Arnold (1957)'        },
    { icon: '🔗', label: 'Activations', value: 'Learnable splines on edges'      },
    { icon: '📉', label: 'Parameters',  value: 'Fewer than MLP for same accuracy'},
    { icon: '🎯', label: 'Strength',    value: 'Symbolic regression & science'   }
  ];
}