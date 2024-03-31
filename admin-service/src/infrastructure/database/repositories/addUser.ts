import { UserData } from "../../../domain/entities/UserData";
import { UserEntity } from "../../../domain/entities/UserEntity";
import { hashPassword } from "../../../util/bcrypt/hashPassword";
import { Admin } from "../models/admin";

export const addUser = async (data: UserData):Promise<UserEntity | null> => {
  if (!data.email || !data.password || !data.username) {
    throw new Error("Username, Email, and Password are required");
  }

  if (data.username.trim() === "") {
    throw new Error("Username cannot be empty");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(data.email)) {
    throw new Error("Invalid email format");
  }
  if (data.password.length < 6) {
    throw new Error("Password must be at least 8 characters long");
  }
  const existingUser:UserEntity|null=await Admin.findOne({email:data?.email,isAdmin:false,role:"user"});
  if(existingUser){
    throw new Error("User already exist")
  }

  const hashedPassword=await hashPassword(data?.password);
  const newUser=new Admin({
    email:data?.email,
    password:hashedPassword,
    username:data?.username,
    role:"user",
    isAdmin:false
  })
  const savedUser=await newUser.save()
  return savedUser;
};
