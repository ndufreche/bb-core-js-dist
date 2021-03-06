/*
 * Copyright (c) 2011-2013 Lp digital system
 *
 * This file is part of BackBee.
 *
 * BackBee is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * BackBee is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with BackBee. If not, see <http://www.gnu.org/licenses/>.
 */

define(["tb.core"], function (BbCore) {
    'use strict';

    /**
     * Register every routes of page application into BbCore.routeManager
     */
    BbCore.RouteManager.registerRoute('page', {
        prefix: 'page',
        routes: {
            'contribution.index': {
                url: '/contribution/index',
                action: 'MainController:contributionIndex'
            },
            'tree': {
                url: '/tree',
                action: 'MainController:tree'
            },
            'manage': {
                url: '/manage',
                action: 'MainController:manage'
            }
        }
    });
});
