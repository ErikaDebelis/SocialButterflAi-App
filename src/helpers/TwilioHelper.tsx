import Constants from "./Constants";

export default class TwilioHelper
{
    constructor()
    {}

    public async SendForm(
        from:string,
        subject:string,
        message:string
    ): Promise<boolean>
    {
        var twilioResponse = await fetch(Constants.TWILIO_URL, {
            method: Constants.REST_METHOD_POST,
            headers: {
                [Constants.CONTENT_TYPE_KEY]: Constants.CONTENT_TYPE_VALUE
            },
            body: `${new URLSearchParams(
                {
                    from,
                    subject,
                    message
                }
                )}`,
        });

        if (twilioResponse.status !== 200)
        {
            console.error("TwilioHelper.SendForm: Error sending form");

            return twilioResponse.status === 400;
        }

        return twilioResponse.status === 200;
    }
}