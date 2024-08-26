import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"

export default function SignUp() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">OTP Verification</h1>
            <p className="text-balance text-muted-foreground">
              Enter the OTP sent to "+25472334748"
            </p>
            <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
    <p className="text-balance text  foreground">
              00:90 seconds
            </p>
            <p className="text-balance text  foreground">
             Didn't receive the code?
            </p>
            <Link
                  href="/forgot-password"
                  className="  text-balance underline"
                >
                 Re-send
                </Link>
            <Button type="submit" className="w-full">
           Submit
            </Button>
           
          </div>
         
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="./img/pexels-holodna-27354543.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
