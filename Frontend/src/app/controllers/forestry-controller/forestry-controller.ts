import { ForestryViewComponent } from '../../views/forestry-view/forestry-view.component';

export class ForestryController {
  forestryView: ForestryViewComponent;

  constructor(forestryView: ForestryViewComponent) {
    this.forestryView = forestryView;
  }

  async getForestry() {
    // const res = await fetch('api');
    const res = "forestry value";
    this.forestryView.setForestry(res);
  }
}
