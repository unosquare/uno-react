import * as React from 'react';
import context from '../dataSource/__mocks__/TestContextHelper';
import { createMount } from '@material-ui/core/test-utils';
import ConfirmationDialog from '../../src/classes/ConfirmationDialog';
import {
    Button, Dialog, DialogActions, DialogContent,
    DialogContentText, DialogTitle,
} from '@material-ui/core';

describe('ConfirmationDialog', () => {
    let mount;
    let wrapper;
    beforeEach(() => {
        jest.resetModules();
        mount = createMount();
        wrapper = mount(<ConfirmationDialog
            contentText='Are you sure?'
            title='Do action'
            onAgreeAction={context.actions.onAgreeAction}
            onClose={context.actions.onDesagreeAction}
            open={true}
        />);
    });

    test('Should contain a <Dialog />', () => {
        expect(wrapper.find(Dialog)).toHaveLength(1);
    });

    test('Should contain a <DialogTitle />', () => {
        expect(wrapper.find(DialogTitle)).toHaveLength(1);
    });

    test('Should contain a <DialogContent />', () => {
        expect(wrapper.find(DialogContent)).toHaveLength(1);
    });

    test('Should contain a <DialogContentText />', () => {
        expect(wrapper.find(DialogContentText)).toHaveLength(1);
    });

    test('Should contain a <DialogActions />', () => {
        expect(wrapper.find(DialogActions)).toHaveLength(1);
    });

    test('Should contain a <Button />', () => {
        expect(wrapper.find(Button)).toHaveLength(2);
    });
});