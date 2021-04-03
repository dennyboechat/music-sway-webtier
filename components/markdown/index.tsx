import React from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';

export default function Markdown(props: { content, className?: string, renderers?}) {

    const classNames = classnames('tfs-markdown', props.className);

    return (
        <ReactMarkdown
            source={props.content}
            className={classNames}
            renderers={props.renderers}
        />
    );
};