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
                    <a href="index.html" data-type="index-link">challenge-integrator-node01 documentation</a>
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
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-ea492e1554ed8e86d1c65a57fcb6493bb645a3dc530c013e004bf8a3441cb0b0cf4f41b695ecc65d9830c7a20f15289fc2da5c3c0ca61caa144ae12c240d042a"' : 'data-target="#xs-controllers-links-module-AppModule-ea492e1554ed8e86d1c65a57fcb6493bb645a3dc530c013e004bf8a3441cb0b0cf4f41b695ecc65d9830c7a20f15289fc2da5c3c0ca61caa144ae12c240d042a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ea492e1554ed8e86d1c65a57fcb6493bb645a3dc530c013e004bf8a3441cb0b0cf4f41b695ecc65d9830c7a20f15289fc2da5c3c0ca61caa144ae12c240d042a"' :
                                            'id="xs-controllers-links-module-AppModule-ea492e1554ed8e86d1c65a57fcb6493bb645a3dc530c013e004bf8a3441cb0b0cf4f41b695ecc65d9830c7a20f15289fc2da5c3c0ca61caa144ae12c240d042a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-ea492e1554ed8e86d1c65a57fcb6493bb645a3dc530c013e004bf8a3441cb0b0cf4f41b695ecc65d9830c7a20f15289fc2da5c3c0ca61caa144ae12c240d042a"' : 'data-target="#xs-injectables-links-module-AppModule-ea492e1554ed8e86d1c65a57fcb6493bb645a3dc530c013e004bf8a3441cb0b0cf4f41b695ecc65d9830c7a20f15289fc2da5c3c0ca61caa144ae12c240d042a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ea492e1554ed8e86d1c65a57fcb6493bb645a3dc530c013e004bf8a3441cb0b0cf4f41b695ecc65d9830c7a20f15289fc2da5c3c0ca61caa144ae12c240d042a"' :
                                        'id="xs-injectables-links-module-AppModule-ea492e1554ed8e86d1c65a57fcb6493bb645a3dc530c013e004bf8a3441cb0b0cf4f41b695ecc65d9830c7a20f15289fc2da5c3c0ca61caa144ae12c240d042a"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ClientModule-8a6025cb00e8d314eb1fcab0f103840964d07cbb69a0263added09a26727dfa26fde02c6c14fff583c8dd43aad9f7e6221c371ae45fe9fbbe56454211820ceb6"' : 'data-target="#xs-controllers-links-module-ClientModule-8a6025cb00e8d314eb1fcab0f103840964d07cbb69a0263added09a26727dfa26fde02c6c14fff583c8dd43aad9f7e6221c371ae45fe9fbbe56454211820ceb6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientModule-8a6025cb00e8d314eb1fcab0f103840964d07cbb69a0263added09a26727dfa26fde02c6c14fff583c8dd43aad9f7e6221c371ae45fe9fbbe56454211820ceb6"' :
                                            'id="xs-controllers-links-module-ClientModule-8a6025cb00e8d314eb1fcab0f103840964d07cbb69a0263added09a26727dfa26fde02c6c14fff583c8dd43aad9f7e6221c371ae45fe9fbbe56454211820ceb6"' }>
                                            <li class="link">
                                                <a href="controllers/ClientController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ClientModule-8a6025cb00e8d314eb1fcab0f103840964d07cbb69a0263added09a26727dfa26fde02c6c14fff583c8dd43aad9f7e6221c371ae45fe9fbbe56454211820ceb6"' : 'data-target="#xs-injectables-links-module-ClientModule-8a6025cb00e8d314eb1fcab0f103840964d07cbb69a0263added09a26727dfa26fde02c6c14fff583c8dd43aad9f7e6221c371ae45fe9fbbe56454211820ceb6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientModule-8a6025cb00e8d314eb1fcab0f103840964d07cbb69a0263added09a26727dfa26fde02c6c14fff583c8dd43aad9f7e6221c371ae45fe9fbbe56454211820ceb6"' :
                                        'id="xs-injectables-links-module-ClientModule-8a6025cb00e8d314eb1fcab0f103840964d07cbb69a0263added09a26727dfa26fde02c6c14fff583c8dd43aad9f7e6221c371ae45fe9fbbe56454211820ceb6"' }>
                                        <li class="link">
                                            <a href="injectables/ClientService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProjectModule.html" data-type="entity-link" >ProjectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProjectModule-6fe726e69b6a95c545d35540c20fb363ecea20b559153eeabcd4c1d73595ba42615e3bc684e5a183e5406b8ae33f5cd83e25bfc407e911d50c498102ce75763f"' : 'data-target="#xs-controllers-links-module-ProjectModule-6fe726e69b6a95c545d35540c20fb363ecea20b559153eeabcd4c1d73595ba42615e3bc684e5a183e5406b8ae33f5cd83e25bfc407e911d50c498102ce75763f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProjectModule-6fe726e69b6a95c545d35540c20fb363ecea20b559153eeabcd4c1d73595ba42615e3bc684e5a183e5406b8ae33f5cd83e25bfc407e911d50c498102ce75763f"' :
                                            'id="xs-controllers-links-module-ProjectModule-6fe726e69b6a95c545d35540c20fb363ecea20b559153eeabcd4c1d73595ba42615e3bc684e5a183e5406b8ae33f5cd83e25bfc407e911d50c498102ce75763f"' }>
                                            <li class="link">
                                                <a href="controllers/ProjectController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProjectModule-6fe726e69b6a95c545d35540c20fb363ecea20b559153eeabcd4c1d73595ba42615e3bc684e5a183e5406b8ae33f5cd83e25bfc407e911d50c498102ce75763f"' : 'data-target="#xs-injectables-links-module-ProjectModule-6fe726e69b6a95c545d35540c20fb363ecea20b559153eeabcd4c1d73595ba42615e3bc684e5a183e5406b8ae33f5cd83e25bfc407e911d50c498102ce75763f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProjectModule-6fe726e69b6a95c545d35540c20fb363ecea20b559153eeabcd4c1d73595ba42615e3bc684e5a183e5406b8ae33f5cd83e25bfc407e911d50c498102ce75763f"' :
                                        'id="xs-injectables-links-module-ProjectModule-6fe726e69b6a95c545d35540c20fb363ecea20b559153eeabcd4c1d73595ba42615e3bc684e5a183e5406b8ae33f5cd83e25bfc407e911d50c498102ce75763f"' }>
                                        <li class="link">
                                            <a href="injectables/ProjectService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProjectService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TalentModule.html" data-type="entity-link" >TalentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TalentModule-699d45826ff433d3b7d37b29b92ff09464a753b894cef262c8215288cd651c82af014bda71be452037dcfdd7b7fea04b9ac1a4af92e9c979048323d7c17a162a"' : 'data-target="#xs-controllers-links-module-TalentModule-699d45826ff433d3b7d37b29b92ff09464a753b894cef262c8215288cd651c82af014bda71be452037dcfdd7b7fea04b9ac1a4af92e9c979048323d7c17a162a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TalentModule-699d45826ff433d3b7d37b29b92ff09464a753b894cef262c8215288cd651c82af014bda71be452037dcfdd7b7fea04b9ac1a4af92e9c979048323d7c17a162a"' :
                                            'id="xs-controllers-links-module-TalentModule-699d45826ff433d3b7d37b29b92ff09464a753b894cef262c8215288cd651c82af014bda71be452037dcfdd7b7fea04b9ac1a4af92e9c979048323d7c17a162a"' }>
                                            <li class="link">
                                                <a href="controllers/TalentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TalentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TalentModule-699d45826ff433d3b7d37b29b92ff09464a753b894cef262c8215288cd651c82af014bda71be452037dcfdd7b7fea04b9ac1a4af92e9c979048323d7c17a162a"' : 'data-target="#xs-injectables-links-module-TalentModule-699d45826ff433d3b7d37b29b92ff09464a753b894cef262c8215288cd651c82af014bda71be452037dcfdd7b7fea04b9ac1a4af92e9c979048323d7c17a162a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TalentModule-699d45826ff433d3b7d37b29b92ff09464a753b894cef262c8215288cd651c82af014bda71be452037dcfdd7b7fea04b9ac1a4af92e9c979048323d7c17a162a"' :
                                        'id="xs-injectables-links-module-TalentModule-699d45826ff433d3b7d37b29b92ff09464a753b894cef262c8215288cd651c82af014bda71be452037dcfdd7b7fea04b9ac1a4af92e9c979048323d7c17a162a"' }>
                                        <li class="link">
                                            <a href="injectables/TalentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TalentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ClientController.html" data-type="entity-link" >ClientController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProjectController.html" data-type="entity-link" >ProjectController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TalentController.html" data-type="entity-link" >TalentController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link" >Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateClientDto.html" data-type="entity-link" >CreateClientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProjectDto.html" data-type="entity-link" >CreateProjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTalentDto.html" data-type="entity-link" >CreateTalentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Project.html" data-type="entity-link" >Project</a>
                            </li>
                            <li class="link">
                                <a href="classes/Talent.html" data-type="entity-link" >Talent</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateClientDto.html" data-type="entity-link" >UpdateClientDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProjectDto.html" data-type="entity-link" >UpdateProjectDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTalentDto.html" data-type="entity-link" >UpdateTalentDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientService.html" data-type="entity-link" >ClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectService.html" data-type="entity-link" >ProjectService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TalentService.html" data-type="entity-link" >TalentService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});