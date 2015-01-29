/*
 * @TODO this have to be generated by the php engine
 */
define([], function () {
    'use strict';
    return {
        core: {
            ApplicationManager: {
                appPath: 'resources/toolbar/src/tb/apps',
                /*ne charge que les onglets qui se trouvent dans 'applications'*/
                active: 'main',
                route: '',
                // to change: App should know
                applications: {
                    main: {
                        label: 'Main',
                        config: {
                            mainRoute: 'appMain/index'
                        }
                    },
                    layout: {
                        label: 'Layout',
                        config: {
                            mainRoute: 'appLayout/home'
                        }
                    },
                    content: {
                        label: 'Content edition',
                        config: {}
                    },
                    bundle: {
                        label: 'Bundle',
                        config: {
                            mainRoute: 'bundle/index'
                        }
                    },
                    page: {
                        label: 'Page',
                        config: {
                            mainRoute: 'page/index'
                        }
                    },
                    contribution: {
                        label: 'Contribution',
                        config: {
                            mainRoute: 'contribution/index'
                        }
                    },
                    user: {
                        label: 'User',
                        config: {
                            mainRoute: 'user/index'
                        }
                    }
                }
            }
        },
        component: {
            logger: {
                level: 8,
                mode: 'devel'
            }

        },
        plugins: {
            namespace: {
                core: 'src/tb/apps/content/plugins/',
                demo: ''
            },
            "core": {
                edit: {
                    accept: ['BlockDemo'],
                    config: {}
                },
                contentselector: {
                    accept: ['Container/OneColumn'],

                    //handle wildcard
                    config: {
                        appendPosition: "bottom",
                        /* default */
                        'Home/HomeContainer': {

                            accept: ['article', 'paragraph']
                        }
                    }
                },
                contenttype: {
                    accept: ['Home/HomeContainer', 'BlockDemo'],
                    config: {}
                },
                parameters: {
                    accept: ['BlockDemo'],
                    config: {}
                },
                contentsetplus: {
                    accept: ['Container/OneColumn'],
                    config: {}
                },
                remove: {
                    accept: ['BlockDemo'],
                    config: {}
                },
                rte: {
                    accept: ['*'],
                    config: {
                        adapter: "cke",
                        aloha: {
                            libPath: ''
                        },
                        cke: {
                            libName: 'ckeeditor',
                            //require name


                            skin: "backbee,/resources/toolbar/src/tb/component/cke/skins/backbee/",
                            editableConfig: {
                                "basic": {
                                    title: '',
                                    toolbarGroups: [{
                                        name: 'editing',
                                        groups: ['basicstyles', 'links']
                                    }, {
                                        name: 'undo'
                                    }, {
                                        name: 'clipboard',
                                        groups: ['selection', 'clipboard']
                                    }, {
                                        name: 'about'
                                    }],
                                    removePlugins: 'colorbutton,find,flash,font,forms,iframe,newpage,removeformat,smiley,specialchar,stylescombo,templates'
                                },
                                lite: {
                                    title: "lite editor",
                                    toolbarGroups: [],
                                    removePlugins: 'colorbutton,specialchar'
                                }
                            }
                        }
                    }
                }
            },
            "demo": {}
        }
    };
});