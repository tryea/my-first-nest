'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">my-first-nest documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-187ef44de93fa20f0d65c3eac16a2d6d50dcaaf3c4ea3079f59561ca3de0cf21f3c93634c1cba67c2835ca5bef11b87edbb89a51feecea4024e148f17e419ac9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-187ef44de93fa20f0d65c3eac16a2d6d50dcaaf3c4ea3079f59561ca3de0cf21f3c93634c1cba67c2835ca5bef11b87edbb89a51feecea4024e148f17e419ac9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-187ef44de93fa20f0d65c3eac16a2d6d50dcaaf3c4ea3079f59561ca3de0cf21f3c93634c1cba67c2835ca5bef11b87edbb89a51feecea4024e148f17e419ac9"' :
                                            'id="xs-controllers-links-module-AppModule-187ef44de93fa20f0d65c3eac16a2d6d50dcaaf3c4ea3079f59561ca3de0cf21f3c93634c1cba67c2835ca5bef11b87edbb89a51feecea4024e148f17e419ac9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-187ef44de93fa20f0d65c3eac16a2d6d50dcaaf3c4ea3079f59561ca3de0cf21f3c93634c1cba67c2835ca5bef11b87edbb89a51feecea4024e148f17e419ac9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-187ef44de93fa20f0d65c3eac16a2d6d50dcaaf3c4ea3079f59561ca3de0cf21f3c93634c1cba67c2835ca5bef11b87edbb89a51feecea4024e148f17e419ac9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-187ef44de93fa20f0d65c3eac16a2d6d50dcaaf3c4ea3079f59561ca3de0cf21f3c93634c1cba67c2835ca5bef11b87edbb89a51feecea4024e148f17e419ac9"' :
                                        'id="xs-injectables-links-module-AppModule-187ef44de93fa20f0d65c3eac16a2d6d50dcaaf3c4ea3079f59561ca3de0cf21f3c93634c1cba67c2835ca5bef11b87edbb89a51feecea4024e148f17e419ac9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-9b380d3984903180ca5228b4f25018b1d5e88d03205ba0aa641c43e5a83a246848d21d568c4df5351d32cb7a7ed4e113ae0f7a53ae695ceffd2cdba76019bf68"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-9b380d3984903180ca5228b4f25018b1d5e88d03205ba0aa641c43e5a83a246848d21d568c4df5351d32cb7a7ed4e113ae0f7a53ae695ceffd2cdba76019bf68"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-9b380d3984903180ca5228b4f25018b1d5e88d03205ba0aa641c43e5a83a246848d21d568c4df5351d32cb7a7ed4e113ae0f7a53ae695ceffd2cdba76019bf68"' :
                                            'id="xs-controllers-links-module-AuthModule-9b380d3984903180ca5228b4f25018b1d5e88d03205ba0aa641c43e5a83a246848d21d568c4df5351d32cb7a7ed4e113ae0f7a53ae695ceffd2cdba76019bf68"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-9b380d3984903180ca5228b4f25018b1d5e88d03205ba0aa641c43e5a83a246848d21d568c4df5351d32cb7a7ed4e113ae0f7a53ae695ceffd2cdba76019bf68"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-9b380d3984903180ca5228b4f25018b1d5e88d03205ba0aa641c43e5a83a246848d21d568c4df5351d32cb7a7ed4e113ae0f7a53ae695ceffd2cdba76019bf68"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-9b380d3984903180ca5228b4f25018b1d5e88d03205ba0aa641c43e5a83a246848d21d568c4df5351d32cb7a7ed4e113ae0f7a53ae695ceffd2cdba76019bf68"' :
                                        'id="xs-injectables-links-module-AuthModule-9b380d3984903180ca5228b4f25018b1d5e88d03205ba0aa641c43e5a83a246848d21d568c4df5351d32cb7a7ed4e113ae0f7a53ae695ceffd2cdba76019bf68"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LatihanModule.html" data-type="entity-link" >LatihanModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LatihanModule-bc5b0f80d099e1e102491f91de4beca1f5eec1af0f6ecbeef24ce54d9f9e8cb9c77de1e451d6d6a6731157b3284da8cade11d735153ba3de4ffadb9050343788"' : 'data-bs-target="#xs-controllers-links-module-LatihanModule-bc5b0f80d099e1e102491f91de4beca1f5eec1af0f6ecbeef24ce54d9f9e8cb9c77de1e451d6d6a6731157b3284da8cade11d735153ba3de4ffadb9050343788"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LatihanModule-bc5b0f80d099e1e102491f91de4beca1f5eec1af0f6ecbeef24ce54d9f9e8cb9c77de1e451d6d6a6731157b3284da8cade11d735153ba3de4ffadb9050343788"' :
                                            'id="xs-controllers-links-module-LatihanModule-bc5b0f80d099e1e102491f91de4beca1f5eec1af0f6ecbeef24ce54d9f9e8cb9c77de1e451d6d6a6731157b3284da8cade11d735153ba3de4ffadb9050343788"' }>
                                            <li class="link">
                                                <a href="controllers/LatihanController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LatihanModule-bc5b0f80d099e1e102491f91de4beca1f5eec1af0f6ecbeef24ce54d9f9e8cb9c77de1e451d6d6a6731157b3284da8cade11d735153ba3de4ffadb9050343788"' : 'data-bs-target="#xs-injectables-links-module-LatihanModule-bc5b0f80d099e1e102491f91de4beca1f5eec1af0f6ecbeef24ce54d9f9e8cb9c77de1e451d6d6a6731157b3284da8cade11d735153ba3de4ffadb9050343788"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatihanModule-bc5b0f80d099e1e102491f91de4beca1f5eec1af0f6ecbeef24ce54d9f9e8cb9c77de1e451d6d6a6731157b3284da8cade11d735153ba3de4ffadb9050343788"' :
                                        'id="xs-injectables-links-module-LatihanModule-bc5b0f80d099e1e102491f91de4beca1f5eec1af0f6ecbeef24ce54d9f9e8cb9c77de1e451d6d6a6731157b3284da8cade11d735153ba3de4ffadb9050343788"' }>
                                        <li class="link">
                                            <a href="injectables/LatihanService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-dc341fd48298a9d2ecfbe9a896624d5760588897f3b7023a5960a73653ca4545e05f273cce89d6edc665bdb57caae03d32bf88de42138306d5c028f3250c6790"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-dc341fd48298a9d2ecfbe9a896624d5760588897f3b7023a5960a73653ca4545e05f273cce89d6edc665bdb57caae03d32bf88de42138306d5c028f3250c6790"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-dc341fd48298a9d2ecfbe9a896624d5760588897f3b7023a5960a73653ca4545e05f273cce89d6edc665bdb57caae03d32bf88de42138306d5c028f3250c6790"' :
                                        'id="xs-injectables-links-module-PrismaModule-dc341fd48298a9d2ecfbe9a896624d5760588897f3b7023a5960a73653ca4545e05f273cce89d6edc665bdb57caae03d32bf88de42138306d5c028f3250c6790"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-f2ba7da43bb3243fe42e50969a517f45ee883e6c8076eace778739fffcc7c7577aaa98435e223f9f0b326adb14e70be5f90f9310c11265e88ddfd55042181b37"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-f2ba7da43bb3243fe42e50969a517f45ee883e6c8076eace778739fffcc7c7577aaa98435e223f9f0b326adb14e70be5f90f9310c11265e88ddfd55042181b37"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-f2ba7da43bb3243fe42e50969a517f45ee883e6c8076eace778739fffcc7c7577aaa98435e223f9f0b326adb14e70be5f90f9310c11265e88ddfd55042181b37"' :
                                            'id="xs-controllers-links-module-SchoolModule-f2ba7da43bb3243fe42e50969a517f45ee883e6c8076eace778739fffcc7c7577aaa98435e223f9f0b326adb14e70be5f90f9310c11265e88ddfd55042181b37"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-f2ba7da43bb3243fe42e50969a517f45ee883e6c8076eace778739fffcc7c7577aaa98435e223f9f0b326adb14e70be5f90f9310c11265e88ddfd55042181b37"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-f2ba7da43bb3243fe42e50969a517f45ee883e6c8076eace778739fffcc7c7577aaa98435e223f9f0b326adb14e70be5f90f9310c11265e88ddfd55042181b37"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-f2ba7da43bb3243fe42e50969a517f45ee883e6c8076eace778739fffcc7c7577aaa98435e223f9f0b326adb14e70be5f90f9310c11265e88ddfd55042181b37"' :
                                        'id="xs-injectables-links-module-SchoolModule-f2ba7da43bb3243fe42e50969a517f45ee883e6c8076eace778739fffcc7c7577aaa98435e223f9f0b326adb14e70be5f90f9310c11265e88ddfd55042181b37"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-e270f3cd441c87e6361931d6d0cff5357860bd012f70c3cfa1b8f3fe9fdaf753247ac90992a211b4115cde331a292aea054a0bbdbd699d941cc17dfc908e40ba"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-e270f3cd441c87e6361931d6d0cff5357860bd012f70c3cfa1b8f3fe9fdaf753247ac90992a211b4115cde331a292aea054a0bbdbd699d941cc17dfc908e40ba"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-e270f3cd441c87e6361931d6d0cff5357860bd012f70c3cfa1b8f3fe9fdaf753247ac90992a211b4115cde331a292aea054a0bbdbd699d941cc17dfc908e40ba"' :
                                            'id="xs-controllers-links-module-TaskModule-e270f3cd441c87e6361931d6d0cff5357860bd012f70c3cfa1b8f3fe9fdaf753247ac90992a211b4115cde331a292aea054a0bbdbd699d941cc17dfc908e40ba"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-e270f3cd441c87e6361931d6d0cff5357860bd012f70c3cfa1b8f3fe9fdaf753247ac90992a211b4115cde331a292aea054a0bbdbd699d941cc17dfc908e40ba"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-e270f3cd441c87e6361931d6d0cff5357860bd012f70c3cfa1b8f3fe9fdaf753247ac90992a211b4115cde331a292aea054a0bbdbd699d941cc17dfc908e40ba"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-e270f3cd441c87e6361931d6d0cff5357860bd012f70c3cfa1b8f3fe9fdaf753247ac90992a211b4115cde331a292aea054a0bbdbd699d941cc17dfc908e40ba"' :
                                        'id="xs-injectables-links-module-TaskModule-e270f3cd441c87e6361931d6d0cff5357860bd012f70c3cfa1b8f3fe9fdaf753247ac90992a211b4115cde331a292aea054a0bbdbd699d941cc17dfc908e40ba"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDto.html" data-type="entity-link" >UpdateTaskDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});