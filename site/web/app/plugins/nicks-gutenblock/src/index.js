// src/index.js
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

const TEMPLATE = [
	['core/heading', { placeholder: 'Recipe Title' }],
	['core/columns', {},[
		['core/column', {}, [
			['core/image']
		]],
		['core/column', {},[
			['core/paragraph', { placeholder: 'Enter short recipe description...' }],
			['core/paragraph', { placeholder: 'Enter ingredients...' }],
			['core/button', { text: 'Make this Recipe' }]
			]
		]
	]
]];

registerBlockType( 'myguten-block/test-block', {
	title: 'Recipe Block',
    description: 'An item for the Listicle block.',
    category: 'formatting',
    icon: 'shield',
    keywords: ['List item'],
	edit: props => {
        const { className } = props;
        return [
            <div className={className}>
                <InnerBlocks 
                    template={TEMPLATE} 
                    templateLock="all" 
                />
            </div>
        ];
    },
	save: props => {
        return (
            <div>
                <InnerBlocks.Content />
            </div>
        );
    },
} );