/**
 * Label Routes
 */

import Router from 'koa-router';
import { LabelController } from 'controllers/label.controller';
import { Label } from 'models/label.model';

//init
const labelRouter = new Router();

labelRouter.get('/', async (ctx) => {
	const labelController = new LabelController();
	const labels = await labelController.getLabels();
	ctx.status = 200;
	ctx.body = labels;
});

labelRouter.get('/:id', async (ctx) => {
	const labelController = new LabelController();
	const label = await labelController.getLabel(ctx.params.id);
	ctx.status = 200;
	ctx.body = label;
});

labelRouter.post('/', async (ctx) => {
	const labelController = new LabelController();
	const label = await labelController.createLabel(ctx.request.body as Label);
	ctx.status = 200;
	ctx.body = label;
});

labelRouter.put('/:id', async (ctx) => {
	const labelController = new LabelController();
	const label = await labelController.updateLabel(
		ctx.params.id,
		ctx.request.body as Label
	);
	ctx.status = 200;
	ctx.body = label;
});

labelRouter.delete('/:id', async (ctx) => {
	const labelController = new LabelController();
	const label = await labelController.deleteLabel(ctx.params.id);
	ctx.status = 200;
	ctx.body = label;
});

export default labelRouter;
