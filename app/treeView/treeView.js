'use strict';

angular.module('myApp.treeView', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/json', {
                templateUrl : 'treeView/treeView.html',
                controller : 'jsonTreeCtrl'
            });
        }
    ])

.controller('jsonTreeCtrl', ["$scope", function ($scope) {

            $scope.data = {
                name : "JSON Tree",
                value : null,
                children : []
            };

            var tree = convertToArray(getData(), $scope.data);
            
            $scope.toggle = toggleItem;
            
            $scope.isExpanded = true;
            
            function toggleItem(){
                  $scope.isExpanded = !$scope.isExpanded;
            };
            
            function convertToArray(data, parentNode) {

                // check if the data is an array
                if (angular.isArray(data)) {
                    // array
                    for (var i in data) {
                        var node = {
                            name : i,
                            value : null,
                            children : []
                        }
                        convertToArray(data[i], node);
                        parentNode.children.push(node);
                    }
                } else if (angular.isObject(data)) {

                    for (var prop in data) {
                        if (data.hasOwnProperty(prop)) {
                            var node = {
                                name : prop,
                                value : angular.isObject(data[prop]) ? null : data[prop] ? data[prop] : "null",
                                children: []
                            }
                            convertToArray(data[prop], node);
                            parentNode.children.push(node)
                        }
                    }
                    
                } else {
                    // must be an attribute
                }
                
                return parentNode;
            };

            function getData() {
                return {
                    "tasks" : [{
                            "name" : "download pack",
                            "workflow" : null,
                            "created_at" : "2017-02-27T22:23:59.522366+00:00",
                            "updated_at" : "2017-02-27T22:24:03.807022+00:00",
                            "state" : "succeeded",
                            "result" : {
                                "exit_code" : 0,
                                "result" : {
                                    "st2" : "Success."
                                },
                                "stderr" : "st2.actions.python.DownloadGitRepoAction: DEBUG    Moving pack from /root/f50b4e5a9d30609142e64f9983c68d77 to /opt/stackstorm/packs/.\n",
                                "stdout" : ""
                            },
                            "id" : "download pack",
                            "execution_id" : "58b4a6ffc4da5f349b687d06"
                        }, {
                            "name" : "make a prerun",
                            "workflow" : null,
                            "created_at" : "2017-02-27T22:24:03.827148+00:00",
                            "updated_at" : "2017-02-27T22:24:06.058811+00:00",
                            "state" : "succeeded",
                            "result" : {
                                "exit_code" : 0,
                                "result" : [
                                    "st2"
                                ],
                                "stderr" : "",
                                "stdout" : ""
                            },
                            "id" : "make a prerun",
                            "execution_id" : "58b4a703c4da5f349b687d08"
                        }, {
                            "name" : "install pack dependencies",
                            "workflow" : null,
                            "created_at" : "2017-02-27T22:24:06.072519+00:00",
                            "updated_at" : "2017-02-27T22:24:16.382365+00:00",
                            "state" : "succeeded",
                            "result" : {
                                "exit_code" : 0,
                                "result" : "Successfuly set up virtualenv for the following packs: st2",
                                "stderr" : "st2.actions.python.SetupVirtualEnvironmentAction: DEBUG    Setting up virtualenv for pack \"st2\"\nst2.actions.python.SetupVirtualEnvironmentAction: INFO     Virtualenv path \"/opt/stackstorm/virtualenvs/st2\" doesn't exist\nst2.actions.python.SetupVirtualEnvironmentAction: DEBUG    Creating virtualenv for pack \"st2\" in \"/opt/stackstorm/virtualenvs/st2\"\nst2.actions.python.SetupVirtualEnvironmentAction: DEBUG    Creating virtualenv in \"/opt/stackstorm/virtualenvs/st2\" using Python binary \"/opt/stackstorm/st2/bin/python\"\nst2.actions.python.SetupVirtualEnvironmentAction: DEBUG    Running command \"/opt/stackstorm/st2/bin/virtualenv -p /opt/stackstorm/st2/bin/python --always-copy /opt/stackstorm/virtualenvs/st2\" to create virtualenv.\nst2.actions.python.SetupVirtualEnvironmentAction: DEBUG    Installing base requirements\nst2.actions.python.SetupVirtualEnvironmentAction: DEBUG    Installing pack specific requirements from \"/opt/stackstorm/packs/st2/requirements.txt\"\nst2.actions.python.SetupVirtualEnvironmentAction: DEBUG    Virtualenv for pack \"st2\" successfully created in \"/opt/stackstorm/virtualenvs/st2\"\n",
                                "stdout" : ""
                            },
                            "id" : "install pack dependencies",
                            "execution_id" : "58b4a706c4da5f349b687d0a"
                        }, {
                            "name" : "register pack",
                            "workflow" : null,
                            "created_at" : "2017-02-27T22:24:16.399081+00:00",
                            "updated_at" : "2017-02-27T22:24:21.851793+00:00",
                            "state" : "succeeded",
                            "result" : {
                                "exit_code" : 0,
                                "result" : {
                                    "sensors" : 0,
                                    "aliases" : 6,
                                    "actions" : 15,
                                    "runners" : 13,
                                    "triggers" : 0
                                },
                                "stderr" : "st2.actions.python.St2RegisterAction: DEBUG    Calling client method \"register\" with kwargs \"{'types': ['action', 'alias', 'sensor', 'trigger'], 'packs': [u'st2']}\"\n",
                                "stdout" : ""
                            },
                            "id" : "register pack",
                            "execution_id" : "58b4a710c4da5f349b687d0c"
                        }
                    ]
                };
            };
        }
    ]);
