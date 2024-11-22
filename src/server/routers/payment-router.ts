import { router } from "../__internals/router";
import { privateProcedure } from "../procedures";

export const paymentRouter = router({
    createCheckoutSession: privateProcedure.mutation(async ({ c, ctx }) => {
        const { user } = ctx

        return c.json({  })
    })
})