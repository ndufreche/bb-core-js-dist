/*
 * Copyright (c) 2011-2013 Lp digital system
 *
 * This file is part of BackBuilder5.
 *
 * BackBuilder5 is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * BackBuilder5 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with BackBuilder5. If not, see <http://www.gnu.org/licenses/>.
 */

require.config({
    paths: {
        'content.routes': 'src/tb/apps/content/routes',

        //Components
        'content.domparser': 'src/tb/apps/content/components/DOMParser',

        //Models
        'content.models.AbstractContent': 'src/tb/apps/content/models/AbstractContent',
        'content.models.Content': 'src/tb/apps/content/models/Content',
        'content.models.Option': 'src/tb/apps/content/models/Option',

        //Templates
        'content/tpl/options_container': 'src/tb/apps/content/templates/options-container.twig',
        'content/tpl/button': 'src/tb/apps/content/templates/button.twig'
    }
});

define("app.content", ["tb.core"], function (Core) {

    'use strict';

    Core.ApplicationManager.registerApplication("content", {});
});

