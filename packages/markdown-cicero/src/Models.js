/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const CICERO_NS_PREFIX = 'org.accordproject.ciceromark.';

const ciceroMarkModel = `
namespace org.accordproject.ciceromark

import org.accordproject.commonmark.*

/**
 * A model for Accord Project extensions to commonmark
 */

concept Clause extends Child {
    o String clauseid
    o String src
    o String clauseText
}

concept Variable extends Child {
    o String id
    o String value
}

concept ComputedVariable extends Child {
    o String value
}
`;

module.exports = { CICERO_NS_PREFIX, ciceroMarkModel };
