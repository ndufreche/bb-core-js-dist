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

define('tb.component/formbuilder/form/element/Radio', function () {

    'use strict';

    /**
     * ElementRadio object
     */
    return {

        initialize: function (key, config, formTag, view, template, error) {
            this.callSuper(key, config, formTag, error);
            this.view = view;
            this.template = template;

            this.buildCustomConfig(config);
        },

        render: function () {
            var view = new this.view(this.template, this.formTag, this);

            return view.render();
        },

        buildCustomConfig: function (config) {
            this.options = {};
            if (config.hasOwnProperty('options')) {
                this.options = config.options;
            }

            if (config.hasOwnProperty('checked')) {
                this.setValue(config.checked);
            }

            this.inline = false;
            if (config.hasOwnProperty('inline') && config.inline === true) {
                this.inline = config.inline;
            }
        },

        getOptions: function () {
            return this.options;
        },

        isInline: function () {
            return this.inline;
        }
    };
});
