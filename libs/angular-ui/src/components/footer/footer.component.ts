import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-footer',
  template: `
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-6 col-md-3">
                <ul class="list-unstyled mb-0">
                  <li><a href="#">First link</a></li>
                  <li><a href="#">Second link</a></li>
                </ul>
              </div>
              <div class="col-6 col-md-3">
                <ul class="list-unstyled mb-0">
                  <li><a href="#">Third link</a></li>
                  <li><a href="#">Fourth link</a></li>
                </ul>
              </div>
              <div class="col-6 col-md-3">
                <ul class="list-unstyled mb-0">
                  <li><a href="#">Fifth link</a></li>
                  <li><a href="#">Sixth link</a></li>
                </ul>
              </div>
              <div class="col-6 col-md-3">
                <ul class="list-unstyled mb-0">
                  <li><a href="#">Other link</a></li>
                  <li><a href="#">Last link</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-4 mt-lg-0">
            Premium and Open Source dashboard template with responsive and high quality UI. For Free!
          </div>
        </div>
      </div>
    </div>
    
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-auto ml-auto">
            <div class="row align-items-center">
              <div class="col-auto">
                <ul class="list-inline list-inline-dots mb-0">
                  <li class="list-inline-item">
                    <a routerLink="/docs">Documentation</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="/faq">FAQ</a>
                  </li>
                </ul>
              </div>
              <div class="col-auto">
                <a href="https://github.com/tabler/tabler-angular" target="_blank" class="btn btn-outline-primary btn-sm">Source code</a>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
            Copyright © 2018 <a href="https://github.com/tabler/tabler-angular">tabler-angular</a>. 
            Theme by <a href="https://github.com/codecalm" target="_blank">@codecalm</a>. 
            Angular by <a href="https://github.com/beeman" target="_blank">@beeman</a>.
            MIT Licensed
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}